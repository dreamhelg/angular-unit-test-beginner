import { CheckValueService } from './check-value.service';
import { TestBed } from '@angular/core/testing';

describe('Сервис проверки значения ', () => {
  let service: CheckValueService;

  beforeEach(() => {
     TestBed.configureTestingModule({
       providers: [
         CheckValueService
       ]
     });

     service = TestBed.get(CheckValueService);
  });

  it('должен создавать экземпляр класса', () => {
    expect(service).toBeTruthy();
  });

  it('должен проверять значение', () => {
    const value = service.check();
    expect(value).toBeTruthy();
  });
});
