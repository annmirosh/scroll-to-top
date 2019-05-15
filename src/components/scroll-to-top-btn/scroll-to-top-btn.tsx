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
    /**
     * The mode: dark or light
     */
    @State() visible: boolean = false;
    @Prop() mode: string = 'dark';
    @Prop() right: number;
    @Prop() bottom: number;
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
