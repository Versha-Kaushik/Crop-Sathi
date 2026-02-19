import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import './Dashboard.css';

const Dashboard = () => {
  const [farmerCrops, setFarmerCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [cropOptions, setCropOptions] = useState([]);

  const [newCropData, setNewCropData] = useState({
    name: 'Wheat',
    variety: '',
    plantedDate: '',
    area: ''
  });

  const [currentStages, setCurrentStages] = useState([]);
  const [irrigationSchedule, setIrrigationSchedule] = useState([]);
  const [fertilizerSchedule, setFertilizerSchedule] = useState([]);
  const [pestManagement, setPestManagement] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user.id : null;

  const fetchCrops = () => {
    setLoading(true);
    const apiUrl = import.meta.env.VITE_API_URL || '';
    fetch(`${apiUrl}/api/dashboard/farmer-crops`, {
      headers: {
        'x-user-id': userId
      }
    })
      .then(res => res.json())
      .then(data => {
        setFarmerCrops(data);
        if (data.length > 0) {
          if (selectedCrop) {
            const exist = data.find(c => c.id === selectedCrop.id);
            setSelectedCrop(exist || data[0]);
          } else {
            setSelectedCrop(data[0]);
          }
        } else {
          setSelectedCrop(null);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching crops:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (userId) {
      fetchCrops();
    }
  }, [userId]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || '';
    fetch(`${apiUrl}/api/constants/crop-options`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCropOptions(data);
        }
      })
      .catch(err => console.error('Error fetching crop options:', err));
  }, []);

  const handleAddCrop = async (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split('T')[0];
    const payload = { ...newCropData, plantedDate: today };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${apiUrl}/api/dashboard/farmer-crops`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': userId
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        toast.success('Crop added successfully!');
        setShowAddModal(false);
        setNewCropData({ name: 'Wheat', variety: '', plantedDate: '', area: '' });
        fetchCrops();
      } else {
        const errorData = await response.json();
        console.error('Failed to add crop:', errorData);
        toast.error('Failed to add crop: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error adding crop:', error);
      toast.error('Error adding crop');
    }
  };

  useEffect(() => {
    if (selectedCrop) {
      const apiUrl = import.meta.env.VITE_API_URL || '';
      Promise.all([
        fetch(`${apiUrl}/api/dashboard/stages/${selectedCrop.name}`).then(res => res.json()),
        fetch(`${apiUrl}/api/dashboard/schedules/${selectedCrop.name}`).then(res => res.json()),
        fetch(`${apiUrl}/api/dashboard/pest-management/${selectedCrop.name}`).then(res => res.json())
      ])
        .then(([stages, schedules, pest]) => {
          setCurrentStages(stages || []);
          setIrrigationSchedule(schedules.irrigation || []);
          setFertilizerSchedule(schedules.fertilizer || []);
          setPestManagement(pest || []);
        })
        .catch(err => {
          console.error('Error fetching crop details:', err);
        });
    }
  }, [selectedCrop]);

  const getCurrentStage = () => {
    if (!currentStages.length) return {};
    return currentStages.find(stage => stage.stage === selectedCrop.currentStage) || currentStages[0] || {};
  };

  const getCompletedStages = (crop) => {
    if (!currentStages.length) return 0;
    const index = currentStages.findIndex(stage => stage.stage === selectedCrop.currentStage);
    return index === -1 ? (selectedCrop.currentStage === 'Harvested' ? currentStages.length : 0) : index;
  };

  const getTotalStages = (crop) => {
    return currentStages.length;
  };

  const getNextIrrigation = (crop) => {
    if (!crop || !irrigationSchedule.length) return null;
    const plantedDate = new Date(crop.plantedDate);
    const today = new Date();
    const daysSincePlanting = Math.floor((today - plantedDate) / (1000 * 60 * 60 * 24));
    return irrigationSchedule.find(irrigation => irrigation.days > daysSincePlanting) || irrigationSchedule[irrigationSchedule.length - 1];
  };

  const getNextFertilizer = (crop) => {
    if (!crop || !fertilizerSchedule.length) return null;
    const plantedDate = new Date(crop.plantedDate);
    const today = new Date();
    const daysSincePlanting = Math.floor((today - plantedDate) / (1000 * 60 * 60 * 24));
    return fertilizerSchedule.find(fertilizer => fertilizer.days > daysSincePlanting) || fertilizerSchedule[fertilizerSchedule.length - 1];
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getDaysRemaining = (targetDate) => {
    if (!targetDate) return 0;
    const today = new Date();
    const target = new Date(targetDate);
    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="dashboard">
      <div className="container">
        <div className="page-header">
          <div className="header-content">
            <div>
              <h1 className="page-title">🌾 Farmer Dashboard</h1>
              <p className="page-description">
                Monitor your crops, track progress, and get personalized farming recommendations.
              </p>
            </div>
            <button className="add-crop-btn-main" onClick={() => setShowAddModal(true)}>
              + Add New Crop
            </button>
          </div>
        </div>

        {loading ? (
          <div className="loading-spinner">Loading dashboard data...</div>
        ) : !selectedCrop ? (
          <div className="no-data">
            <div className="empty-state">
              <h3>🌱 No Crops Added Yet</h3>
              <p>Start by adding a crop to track its progress and get advisories.</p>
              <button className="add-crop-btn" onClick={() => setShowAddModal(true)}>
                + Add Your First Crop
              </button>
            </div>
          </div>
        ) : (
          <div className="dashboard-wrapper">
            <div className="crop-selector">
              <div className="selector-header">
                <h2 className="section-title">Your Crops</h2>
              </div>
              <div className="crop-cards">
                {farmerCrops.map((crop) => (
                  <div
                    key={crop.id}
                    className={`crop-selector-card ${selectedCrop.id === crop.id ? 'active' : ''}`}
                    onClick={() => setSelectedCrop(crop)}
                  >
                    <img src={crop.image} alt={crop.name} className="crop-selector-image" />
                    <div className="crop-selector-info">
                      <h3>{crop.name}</h3>
                      <p>{crop.variety}</p>
                      <div className="crop-status">
                        <span className={`status-badge ${crop.healthStatus?.toLowerCase() || 'good'}`}>
                          {crop.healthStatus || 'Good'}
                        </span>
                        <span className="progress-text">{crop.progress}% Complete</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-content">
              <div className="crop-overview">
                <div className="crop-header">
                  <img src={selectedCrop.image} alt={selectedCrop.name} className="crop-main-image" />
                  <div className="crop-main-info">
                    <h2>{selectedCrop.name} - {selectedCrop.variety}</h2>
                    <div className="crop-details-grid">
                      <div className="detail-item">
                        <span className="detail-icon">📅</span>
                        <div>
                          <span className="detail-label">Planted:</span>
                          <span className="detail-value">{formatDate(selectedCrop.plantedDate)}</span>
                        </div>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">🌾</span>
                        <div>
                          <span className="detail-label">Expected Harvest:</span>
                          <span className="detail-value">{formatDate(selectedCrop.expectedHarvest)}</span>
                        </div>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">📏</span>
                        <div>
                          <span className="detail-label">Area:</span>
                          <span className="detail-value">{selectedCrop.area}</span>
                        </div>
                      </div>
                      <div className="detail-item">
                        <span className="detail-icon">📊</span>
                        <div>
                          <span className="detail-label">Current Stage:</span>
                          <span className="detail-value">{selectedCrop.currentStage}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="progress-section">
                  <div className="progress-header">
                    <h3>Crop Progress</h3>
                    <span className="progress-percentage">{selectedCrop.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${selectedCrop.progress}%` }}
                    ></div>
                  </div>
                  <div className="progress-info">
                    <span>Stage {getCompletedStages(selectedCrop)} of {getTotalStages(selectedCrop)} completed</span>
                    {selectedCrop.expectedHarvest && getDaysRemaining(selectedCrop.expectedHarvest) > 0 && (
                      <span>{getDaysRemaining(selectedCrop.expectedHarvest)} days to harvest</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="quick-actions">
                <h3>Next Actions Required</h3>
                <div className="action-cards">
                  <div className="action-card urgent">
                    <div className="action-icon">⚡</div>
                    <div className="action-info">
                      <h4>{selectedCrop.nextAction || 'Monitor Crop'}</h4>
                      <p>Due: {formatDate(selectedCrop.nextActionDate)}</p>
                    </div>
                  </div>
                  {getNextIrrigation(selectedCrop) && (
                    <div className="action-card">
                      <div className="action-icon">💧</div>
                      <div className="action-info">
                        <h4>Next Irrigation</h4>
                        <p>{getNextIrrigation(selectedCrop).stage}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="dashboard-tabs">
                <div className="tab-buttons">
                  <button
                    className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    📊 Growth Stages
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'irrigation' ? 'active' : ''}`}
                    onClick={() => setActiveTab('irrigation')}
                  >
                    💧 Irrigation
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'fertilizer' ? 'active' : ''}`}
                    onClick={() => setActiveTab('fertilizer')}
                  >
                    🧪 Fertilizers
                  </button>
                  <button
                    className={`tab-button ${activeTab === 'pest' ? 'active' : ''}`}
                    onClick={() => setActiveTab('pest')}
                  >
                    🐛 Pest Control
                  </button>
                </div>

                <div className="tab-content">
                  {activeTab === 'overview' && (
                    <div className="stages-timeline">
                      <h3>Growth Stages Timeline</h3>
                      <div className="timeline">
                        {currentStages.length > 0 ? (() => {
                          const currentIndex = currentStages.findIndex(s => s.stage === selectedCrop.currentStage);

                          return currentStages.map((stage, index) => {
                            const isCompleted = index < currentIndex || (currentIndex === -1 && selectedCrop.currentStage === 'Harvested');
                            const isCurrent = index === currentIndex;

                            return (
                              <div
                                key={index}
                                className={`timeline-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                              >
                                <div className="timeline-marker">
                                  {isCompleted ? '✅' : isCurrent ? '🔄' : '⏳'}
                                </div>
                                <div className="timeline-content">
                                  <h4>{stage.stage}</h4>
                                  <p className="stage-duration">Duration: {stage.duration}</p>
                                  <p className="stage-description">{stage.description}</p>
                                  <div className="stage-tasks">
                                    <h5>Key Tasks:</h5>
                                    <ul>
                                      {stage.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex}>{task}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          });
                        })() : <p>No growth stages data available.</p>}
                      </div>
                    </div>
                  )}

                  {activeTab === 'irrigation' && (
                    <div className="irrigation-schedule">
                      <h3>Irrigation Schedule</h3>
                      <div className="schedule-grid">
                        {irrigationSchedule.length > 0 ? irrigationSchedule.map((irrigation, index) => (
                          <div key={index} className="schedule-card">
                            <div className="schedule-header">
                              <span className="schedule-icon">💧</span>
                              <h4>{irrigation.stage}</h4>
                            </div>
                            <div className="schedule-details">
                              <p><strong>Day:</strong> {irrigation.days} after planting</p>
                              <p><strong>Purpose:</strong> {irrigation.description}</p>
                            </div>
                          </div>
                        )) : <p>No irrigation schedule available.</p>}
                      </div>
                    </div>
                  )}

                  {activeTab === 'fertilizer' && (
                    <div className="fertilizer-schedule">
                      <h3>Fertilizer Application</h3>
                      <div className="schedule-grid">
                        {fertilizerSchedule.length > 0 ? fertilizerSchedule.map((fert, index) => (
                          <div key={index} className="schedule-card">
                            <div className="schedule-header">
                              <span className="schedule-icon">🧪</span>
                              <h4>{fert.stage}</h4>
                            </div>
                            <div className="schedule-details">
                              <p><strong>Day:</strong> {fert.days} days</p>
                              <p><strong>Fertilizer:</strong> {fert.fertilizer}</p>
                              <p><strong>Qty:</strong> {fert.quantity}</p>
                            </div>
                          </div>
                        )) : <p>No fertilizer schedule available.</p>}
                      </div>
                    </div>
                  )}

                  {activeTab === 'pest' && (
                    <div className="pest-management">
                      <h3>Pest Management</h3>
                      <div className="pest-grid">
                        {pestManagement.length > 0 ? pestManagement.map((pest, index) => (
                          <div key={index} className="pest-card">
                            <div className="pest-header">
                              <span className="pest-icon">🐛</span>
                              <h4>{pest.pest}</h4>
                            </div>
                            <div className="pest-details">
                              <p><strong>Stage:</strong> {pest.stage}</p>
                              <p><strong>Symptoms:</strong> {pest.symptoms}</p>
                              <p><strong>Treatment:</strong> {pest.treatment}</p>
                            </div>
                          </div>
                        )) : <p>No pest management info available.</p>}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </div>
        )}

        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Add New Crop</h2>
                <button className="close-btn" onClick={() => setShowAddModal(false)}>×</button>
              </div>
              <form onSubmit={handleAddCrop}>
                <div className="form-group">
                  <label>Crop Type</label>
                  <input
                    list="crop-options"
                    value={newCropData.name}
                    onChange={(e) => setNewCropData({ ...newCropData, name: e.target.value })}
                    placeholder="Select or type crop name"
                    required
                  />
                  <datalist id="crop-options">
                    {cropOptions.map((option, index) => (
                      <option key={index} value={option} />
                    ))}
                  </datalist>
                </div>
                <div className="form-group">
                  <label>Variety</label>
                  <input
                    type="text"
                    placeholder="e.g. HD-2967"
                    value={newCropData.variety}
                    onChange={(e) => setNewCropData({ ...newCropData, variety: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Area (in hectares)</label>
                  <input
                    type="text"
                    placeholder="e.g. 2.5"
                    value={newCropData.area}
                    onChange={(e) => setNewCropData({ ...newCropData, area: e.target.value })}
                    required
                  />
                </div>
                <div className="modal-actions">
                  <button type="button" onClick={() => setShowAddModal(false)} className="cancel-btn">Cancel</button>
                  <button type="submit" className="submit-btn">Add Crop</button>
                </div>
              </form>
            </div>
          </div>
        )
        }
      </div >
    </div >
  );
};

export default Dashboard;