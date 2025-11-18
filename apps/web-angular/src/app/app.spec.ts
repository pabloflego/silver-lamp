import { TestBed } from '@angular/core/testing';
import { App } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const httpMock = TestBed.inject(HttpTestingController);
    const app = fixture.componentInstance;
    
    // Flush pending HTTP requests from ngOnInit
    httpMock.match(() => true).forEach(req => req.flush({}));
    
    expect(app).toBeTruthy();
    httpMock.verify();
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(App);
    const httpMock = TestBed.inject(HttpTestingController);
    
    fixture.detectChanges();
    
    // Flush pending HTTP requests
    httpMock.match(() => true).forEach(req => req.flush({}));
    
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, web-angular');
    
    httpMock.verify();
  });
});
