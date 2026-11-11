export interface Trigger {
  id: string;
  phrase: string;
  videoUrl: string;
  description: string;
  ambientSound?: "rain" | "birds" | "wind" | "cyber" | "none";
}

export interface PresetVideo {
  name: string;
  phrase: string;
  videoUrl: string;
  description: string;
  ambientSound: "rain" | "birds" | "wind" | "cyber" | "none";
}

export interface MessageLog {
  id: string;
  sender: "user" | "guardian";
  text: string;
  timestamp: string;
  matchedTriggerId?: string | null;
}

export type AlertLevel = "NORMAL" | "WARNING" | "CRITICAL";

export interface LogEntry {
  id: string;
  source: 'SYSTEM' | 'TACTICAL' | 'NAVIGATION' | 'COMMS';
  message: string;
  type: 'INFO' | 'WARN' | 'ALERT';
  timestamp: string;
}

export interface PowerGrid {
  shields: number;
  engines: number;
  weapons: number;
  lifeSupport: number;
}

export interface BioPlant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  rarity: string;
  cost: number;
  oxygenProduction: number;
  datastreamCapacity: number;
  stability: number;
  image: string;
  effects: string[];
}

export interface DataNode {
  id: string;
  name: string;
  district: string;
  securityLevel: string;
  status: string;
  decryptionProgress: number;
  reward: number;
  dataCapacity: string;
}

export interface Cyberdeck {
  id: string;
  name: string;
  ram: number;
  bandwidth: number;
  storage: number;
  cooling: number;
  grafts: string[];
  syncStability: number;
  heatLevel: number;
  hackedNodesCount: number;
}

export interface TerminalLog {
  id: string;
  text: string;
  type: "info" | "success" | "warn" | "warning" | "error" | "code" | "input";
  timestamp: string;
}

export interface HybridResult {
  name: string;
  scientificName: string;
  description: string;
  image?: string;
  rarity: string;
  codename: string;
  efficiencyBoost: number | string;
  vitalSigns: {
    heartRate: number;
    stability: number;
    resonance: number;
    sync: number;
    [key: string]: any;
  };
  components: {
    organic: string[];
    synthetic: string[];
    [key: string]: any;
  };
  schematicAscii?: string;
  growthLog?: string[];
  stats: {
    oxygen: number;
    bandwidth: number;
    defense: number;
  };
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai" | "mycelium";
  content: string;
  text?: string;
  timestamp: string;
}

export interface TreeSpecimen {
  id: string;
  name: string;
  scientificName: string;
  latitude: number;
  longitude: number;
  status: "ONLINE" | "STANDBY" | "ALERT";
  health: number;
  dataRate: string;
  coords: { x: number; y: number };
  commonName: string;
  species: string;
  nodeId: string;
  photosynthesis: number;
  sapFlow: number;
  siliconSaturation: number;
  mycelialSpeed: number;
}


