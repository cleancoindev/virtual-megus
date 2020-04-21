// Some synth presets
//
// Virtual Megus
// 2019-2020, Roman "Megus" Petrov

'use strict';

const synthPresets = {
  // Basses
  'bass': {
    ampEnvelope: {attack: 0, decay: 0.4, sustain: 0, release: 0},
    filterEnvelope: {attack: 0, decay: 0.2, sustain: 0, release: 0},
    filter: {cutoff: 300, resonance: 1, envelopeLevel: 500, type: 'lowpass'},
    osc: [
      {type: 'sawtooth', pitch: 0, detune: 0, level: 0.5},
      {type: 'sawtooth', pitch: 12, detune: 10, level: 0.5},
    ],
  },

  // Stabs
  'stab': {
    ampEnvelope: {attack: 0, decay: 1.5, sustain: 0, release: 0},
    filterEnvelope: {attack: 0, decay: 1, sustain: 0, release: 0},
    filter: {cutoff: 4000, resonance: 1, envelopeLevel: 1000, type: 'lowpass'},
    osc: [
      {type: 'sawtooth', pitch: 0, detune: 0, level: 0.33},
      {type: 'sawtooth', pitch: 0, detune: -15, level: 0.33},
      {type: 'sawtooth', pitch: 0, detune: 15, level: 0.33},
    ]
  },

  // Arpeggios
  'arp': {
    ampEnvelope: {attack: 0, decay: 0.2, sustain: 0.2, release: 0.5},
    filterEnvelope: {attack: 0.1, decay: 0.3, sustain: 0, release: 0},
    filter: {cutoff: 800, resonance: 2, envelopeLevel: 1200, type: 'lowpass'},
    panning: {pan: 0.2, centerPitch: 48, spread: -0.03},
    osc: [
      {type: 'square', pitch: 0, detune: 0, level: 0.33},
      {type: 'square', pitch: 0, detune: -10, level: 0.23},
      {type: 'square', pitch: 0, detune: 10, level: 0.23},
      {type: 'square', pitch: 12, detune: 0, level: 0.2},
    ]
  },

  // Pad
  'pad': {
    ampEnvelope: {attack: 0.4, decay: 2, sustain: 0.8, release: 2},
    filterEnvelope: {attack: 0.5, decay: 2, sustain: 0.4, release: 2},
    filter: {cutoff: 3000, resonance: 1, envelopeLevel: 500, type: 'lowpass'},
    panning: {pan: -0.2, centerPitch: 48, spread: 0.03},
    osc: [
      {type: 'sawtooth', pitch: 0, detune: 0, level: 0.33},
      {type: 'sawtooth', pitch: 0, detune: -15, level: 0.33},
      {type: 'sawtooth', pitch: 0, detune: 15, level: 0.33},
    ]
  },

  // Leads
  'lead1': {
    ampEnvelope: {attack: 0.03, decay: 0.4, sustain: 0.4, release: 0.4},
    filterEnvelope: {attack: 0.05, decay: 1, sustain: 0, release: 0},
    filter: {cutoff: 8000, resonance: 1, envelopeLevel: 1200, type: 'lowpass'},
    osc: [
      {type: 'square', pitch: 0, detune: 0, level: 0.33},
      {type: 'sawtooth', pitch: 0, detune: -10, level: 0.23},
      {type: 'sawtooth', pitch: 0, detune: 10, level: 0.23},
    ]
  },

}