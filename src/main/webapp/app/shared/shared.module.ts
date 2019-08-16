import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [TestSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestSharedModule {
  static forRoot() {
    return {
      ngModule: TestSharedModule
    };
  }
}
