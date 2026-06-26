import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data.json');

export type StoreData = {
  maintenanceMode: boolean;
};

export function getStoreData(): StoreData {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(rawData);
    }
  } catch (error) {
    console.error('Error reading data.json:', error);
  }
  return { maintenanceMode: false };
}

export function updateStoreData(data: Partial<StoreData>): StoreData {
  const currentData = getStoreData();
  const newData = { ...currentData, ...data };
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing data.json:', error);
  }
  return newData;
}
