import { AdRecord } from "../records/ad.record";

const defaultObj  = {
        name: 'Test Name',
        description: 'blah',
        url: 'http://example.com',
        price: 0,
        lat: 9,
        lon: 9.
}

test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj);

    expect(ad.name).toBe('Test Name');
    expect(ad.description).toBe('blah');
});

test("Valitates in valid price", () => {
    expect(() => new AdRecord({
        ...defaultObj,
        price: -2,
    })).toThrow('Chujowa cena!');
})