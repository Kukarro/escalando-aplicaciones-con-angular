// librearia para realizar test
import { TestBed } from '@angular/core/testing';
// lo que se va a testear
import { GroupService } from './group.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

class HttpClientMock  {
  get = jasmine.createSpy();
}

describe('GroupService', () => {
  let service: GroupService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ GroupService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.get(GroupService);
    httpClientMock = TestBed.get(HttpClient);
  });

  it('PRUEBA1: El servicio esta definido.', () => {
    expect(service).toBeDefined();
  });

  it('PRUEBA2: deberia llamar al servicio', () => {
    httpClientMock.get.and.returnValue({
      toPromise() {}
    });
    service.getGroups();
    expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups);
  });
});


/*import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GroupService } from './group.service';

describe('GroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      GroupService
    ]
  }));

  it('should be created', () => {
    const service: GroupService = TestBed.get(GroupService);
    expect(service).toBeTruthy();
  });
});
*/