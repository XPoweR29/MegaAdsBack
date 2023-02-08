import { AdRecord } from "../records/ad.record"
import { pool } from "../utils/db";

afterAll(async() => {
    await pool.end();
});

test('AdRecord returns data from database for one entry', async () => {
    const ad = await AdRecord.getOne('abc');

    expect(ad).toBeDefined();
    expect(ad.id).toBe('abc');
    expect(ad.description).toBe('testowy opis...');
    expect(ad.name).toBe('Testowa');
})

test('AdRecord returns null from DB for unexisting entry', async () => {
    const ad = await AdRecord.getOne('---');

    expect(ad).toBeNull();
})

test('AdRecord.findAll returns array of found entries', async() => {
    const ads = await AdRecord.findAll('');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})

test('AdRecord.findAll returns array of found entries when searching "a"', async() => {
    const ads = await AdRecord.findAll('a');

    expect(ads).not.toEqual([]);
    expect(ads[0].id).toBeDefined();
})

test('AdRecord.findAll returns empty array when searching for something that does not exist.', async() => {
    const ads = await AdRecord.findAll('-------------');

    expect(ads).toEqual([]);
})