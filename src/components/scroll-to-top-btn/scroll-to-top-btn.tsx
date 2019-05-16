import {Component, Prop, State} from '@stencil/core';

function scrollToTop() {
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 10);
            scrollToTop();
            console.info('scroll');
        }, 5);
    }
}

@Component({
    tag: 'scroll-to-top-btn',
    styleUrl: 'scroll-to-top-btn.css',
    shadow: true
})

export class ScrollToTopBtn {
    @State() visible: boolean = false;

    /** Property that defines mode of the button (can be "light" or "dark")
     * */
    @Prop() mode: string = 'light';

    /** Property that defines the right position of the button (in px)
     * */
    @Prop() right: number;

    /** Property that defines the bottom position of the button (in px)
     * */
    @Prop() bottom: number;

    /** Property that defines the direction of the scroll (for now only the "top" direction is available)
     * */
    @Prop() direction: string = 'top';

    constructor() {
        this.manageVisibility = this.manageVisibility.bind(this);
        this.scroll = this.scroll.bind(this);
    }

    componentWillLoad() {
        window.addEventListener('scroll', this.manageVisibility);
        this.manageVisibility();
    }

    componentWillUnload() {
        window.removeEventListener('scroll', this.manageVisibility);
    }

    private manageVisibility() {
        if (window.innerHeight < window.scrollY) {
            this.visible = true;
        } else {
            this.visible = false;
        }
    }

    private scroll() {
        if (this.direction === 'top') {
            scrollToTop();
        }
    }

    render() {
        return <div class={`scroll-to-top-btn ${this.mode} ${this.visible && 'visible'}`}
                    style={{right: `${this.right}px`, bottom: `${this.bottom}px`}}
                    onClick={this.scroll}/>;
    }
}
