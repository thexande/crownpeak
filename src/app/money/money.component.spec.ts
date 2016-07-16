/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MoneyComponent } from './money.component';

describe('Component: Money', () => {
  it('should create an instance', () => {
    let component = new MoneyComponent();
    expect(component).toBeTruthy();
  });
});
