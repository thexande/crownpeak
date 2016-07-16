/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { CardsComponent } from './cards.component';

describe('Component: Cards', () => {
  it('should create an instance', () => {
    let component = new CardsComponent();
    expect(component).toBeTruthy();
  });
});
