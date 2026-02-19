const mongoose = require('mongoose');

const cropSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, 'Please add a crop name']
    },
    variety: {
        type: String,
        default: 'Standard'
    },
    plantedDate: {
        type: Date,
        required: [true, 'Please add planted date']
    },
    area: {
        type: String,
        default: '1 hectare'
    },
    expectedHarvest: {
        type: Date
    },
    currentStage: {
        type: String,
        default: 'Planting'
    },
    progress: {
        type: Number,
        default: 0
    },
    image: {
        type: String
    },
    nextAction: {
        type: String,
        default: 'Monitor Crop'
    },
    nextActionDate: {
        type: Date
    },
    healthStatus: {
        type: String,
        default: 'Good'
    },
    expectedYield: {
        type: String
    },
    totalInvestment: {
        type: String
    },
    expectedRevenue: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Crop', cropSchema);
