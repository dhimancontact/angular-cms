import { Component } from '@angular/core';

import { CmsProperty } from '@angular-cms/core';

@Component({
    template: `
    <div class="form-group row" [formGroup]="formGroup">
        <label [attr.for]="id" class="col-sm-4 col-form-label">{{label}}</label>
        <div class="col-sm-8">
            <div class="card">
                <div class="card-body" >
                    <content-reference [formControlName]="propertyName" [name]="propertyName"></content-reference>
                </div>
            </div>
        </div>
    </div>
  `,
    styles: [`
        .show {
            display: block;
        }
    `]
})

export class ContentReferenceComponent extends CmsProperty {}