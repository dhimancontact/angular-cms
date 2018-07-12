import { Input, Directive, Renderer2, Inject, HostBinding, HostListener, ViewChild, ElementRef } from '@angular/core';

@Directive({
    selector: '[dragOver]',
})
export class DragOverDirective {
    constructor(private renderer: Renderer2, private hostElement: ElementRef) {

    }
    @HostBinding('style.background') private background = '#eee';

    @HostListener('dragover', ['$event']) public onDragOver(event) {
        if(!this.containsFiles(event)) return;
        event.preventDefault();
        event.stopPropagation();
        this.background = '#999';
        //console.log("dragover");
        this.renderer.addClass(this.hostElement.nativeElement, 'drag-over');
    }

    private containsFiles(event) {
        if (event.dataTransfer.types) {
            for (var i = 0; i < event.dataTransfer.types.length; i++) {
                if (event.dataTransfer.types[i] == "Files") {
                    return true;
                }
            }
        }
        return false;
    }

}