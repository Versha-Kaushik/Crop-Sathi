// Using built-in fetch in Node.js 18+

const BASE_URL = 'http://localhost:5000/api';

const test = async () => {
    try {
        // 1. Signup
        const uniqueEmail = `testuser_${Date.now()}@example.com`;
        console.log(`\n--- Testing Signup with ${uniqueEmail} ---`);
        const signupRes = await fetch(`${BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullName: 'Test User',
                email: uniqueEmail,
                password: 'password123'
            })
        });
        const signupData = await signupRes.json();
        console.log('Signup Status:', signupRes.status);
        console.log('Signup Response:', JSON.stringify(signupData, null, 2));

        if (signupRes.status !== 201) throw new Error('Signup failed');

        const userId = signupData.user.id;
        console.log('User ID:', userId);

        // 2. Login
        console.log('\n--- Testing Login ---');
        const loginRes = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: uniqueEmail,
                password: 'password123'
            })
        });
        const loginData = await loginRes.json();
        console.log('Login Status:', loginRes.status);
        // console.log('Login Response:', loginData);

        if (loginRes.status !== 200) throw new Error('Login failed');

        // 3. Add Crop
        console.log('\n--- Testing Add Crop ---');
        const cropRes = await fetch(`${BASE_URL}/dashboard/farmer-crops`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-user-id': userId
            },
            body: JSON.stringify({
                name: 'Wheat',
                variety: 'HD-2967',
                plantedDate: '2023-11-01',
                area: '2 acres'
            })
        });
        const cropData = await cropRes.json();
        console.log('Add Crop Status:', cropRes.status);
        console.log('Add Crop Response:', JSON.stringify(cropData, null, 2));

        if (cropRes.status !== 201) throw new Error('Add Crop failed');

        // 4. Fetch Crops
        console.log('\n--- Testing Fetch Crops ---');
        const fetchCropsRes = await fetch(`${BASE_URL}/dashboard/farmer-crops`, {
            headers: {
                'x-user-id': userId
            }
        });
        const cropsData = await fetchCropsRes.json();
        console.log('Fetch Crops Status:', fetchCropsRes.status);
        console.log('Fetch Crops Response:', JSON.stringify(cropsData, null, 2));

        if (fetchCropsRes.status !== 200 || !Array.isArray(cropsData) || cropsData.length === 0) {
            throw new Error('Fetch Crops failed');
        }

        console.log('\n✅ VERIFICATION SUCCESSFUL');

    } catch (error) {
        console.error('\n❌ VERIFICATION FAILED:', error.message);
        process.exit(1);
    }
};

test();
