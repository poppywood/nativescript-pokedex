import { Component, Input } from '@angular/core';

@Component({
    selector: 'ScopeView',
    template: `
<ng-container *ngIf="isValidScope()">
    <ng-content></ng-content>
</ng-container>
`
})
export class ScopeViewComponent {
    @Input('platform') platform!: 'web' | 'mobile' | 'android' | 'ios';

    constructor() { }

    isValidScope() {
        return (this.platform == 'web');
    }
}