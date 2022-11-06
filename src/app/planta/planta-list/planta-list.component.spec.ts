/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { PlantaListComponent } from './planta-list.component';
import { Planta } from '../planta';
import { HttpClientModule } from '@angular/common/http';

describe('PlantaListComponent', () => {
  let component: PlantaListComponent;
  let fixture: ComponentFixture<PlantaListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListComponent);
    component = fixture.componentInstance;
    for (let i = 0; i < 3; i++) {
      const planta = new Planta(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
      );

      component.plantas.push(planta);
      }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should have the correct headers', () => {
    const element = debug.query(By.css('tr'));
    console.log(element.children);
    const header = element.children.filter((child) => child.name == 'th');
    expect(header[0].nativeElement.textContent).toContain("#");
    expect(header[1].nativeElement.textContent).toContain("Nombre Comun");
    expect(header[2].nativeElement.textContent).toContain("Tipo");
    expect(header[3].nativeElement.textContent).toContain("Clima");
  });

  it('should have three rows', () => {
    expect(debug.queryAll(By.css('tbody td'))).toHaveSize(9)
  });
});
