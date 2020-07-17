import { SimpleService } from './simple.service';
import { CheckValueService } from './check-value.service';
import { TestBed } from '@angular/core/testing';

describe('Простой сервис', () => {
  let service: SimpleService;
  const fakeCheckValueService = { check: () => true };

  beforeEach(() => {
     TestBed.configureTestingModule({
       providers: [
         SimpleService,
         { provide: CheckValueService, useValue: fakeCheckValueService }
       ]
     });

     service = TestBed.get(SimpleService);
  });

  it('должен создавать экземпляр класса', () => {
    expect(service).toBeTruthy();
  });

  it('должен суммировать два числа', () => {
    const sum = service.sum(1, 2);
    expect(sum).toBe(3);
  });

  it('должен возвращать undefined, если второго аргумента нет', () => {
    const sum = service.sum(1);
    expect(sum).toBeUndefined();
  });

  it('должен возвращать 22, если первого аргумента нет', () => {
    const sum = service.sum(undefined, 2);
    expect(sum).toBe(22);
  });

  it('должен проверять значение', () => {
    const value = service.check();
    expect(value).toBeTruthy();
  });
});
