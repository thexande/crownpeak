/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SpiralComponent } from './spiral.component';

describe('Component: Spiral', () => {
  it('should create an instance', () => {
    let component = new SpiralComponent();
    expect(component).toBeTruthy();
  });
});
