import { Component, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-digital-marketing-body',
  templateUrl: './digital-marketing-body.component.html',
  styleUrls: ['./digital-marketing-body.component.css']
})
export class DigitalMarketingBodyComponent   implements OnInit, AfterViewInit {

  cards = [
    {
      heading: 'Basic',
      price: '350 JD',
      bullets: [
        '1 Photography session',
        'Social media management','Content Calendar',
        '10 stories','2 Reels',
        '5 Static posts',
        'Monthly Performance report'
      ],
      link: 'basic',
      ctaText: 'Get Started'
    },
    {
      heading: 'Pro',
      price: '500 JD',
      bullets: [
        '2 Photography session',
        'Social media management','Content Calendar',
        '15 stories','4 Reels',
        '7 Static posts',
        'Monthly Performance report',
        "Assessment & Support Visits"
      ],
      link: 'pro',
      ctaText: 'Upgrade to Pro'
    },
    // {
    //   heading: 'Ultimate',
    //   price: '$29.99',
    //   bullets: [
    //     'Access to all premium workouts and nutrition plans',
    //     '24/7 Priority support',
    //     '1-on-1 virtual coaching session every month',
    //     'Exclusive content and early access to new features'
    //   ],
    //   link: 'ultimate',
    //   ctaText: 'Go Ultimate'
    // }    ,
    {
      heading: 'Ultimate',
      price: '700 JD',
      bullets: [
        '2 Photography session',
        'Social media management','Content Calendar',
        '30 stories','6 Reels',
        '10 Static posts',
        'Monthly Performance report',
        "2 Assessment & Support Visits",
        'Marketing Campaign Strategy'
      ],
      link: 'ultimate',
      ctaText: 'Go Ultimate'
    }
  ];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initOverlay();
  }

  ngAfterViewInit(): void {
    const cardsContainer = this.el.nativeElement.querySelector('.cards');
    this.renderer.listen('body', 'pointermove', (e: PointerEvent) => this.applyOverlayMask(e, cardsContainer));
  }

  applyOverlayMask(e: PointerEvent, cardsContainer: HTMLElement): void {
    const overlayEl = this.el.nativeElement.querySelector('.overlay');
    const x = e.pageX - cardsContainer.offsetLeft;
    const y = e.pageY - cardsContainer.offsetTop;
    this.renderer.setStyle(overlayEl, '--opacity', '1');
    this.renderer.setStyle(overlayEl, '--x', `${x}px`);
    this.renderer.setStyle(overlayEl, '--y', `${y}px`);
  }

  createOverlayCta(overlayCard: HTMLElement, ctaEl: HTMLElement): void {
    const overlayCta = this.renderer.createElement('div');
    this.renderer.addClass(overlayCta, 'cta');
    this.renderer.setProperty(overlayCta, 'textContent', ctaEl.textContent);
    this.renderer.setAttribute(overlayCta, 'aria-hidden', 'true');
    this.renderer.appendChild(overlayCard, overlayCta);
  }

  initOverlayCard(cardEl: HTMLElement): void {
    const overlay = this.el.nativeElement.querySelector('.overlay');
    const overlayCard = this.renderer.createElement('div');
    this.renderer.addClass(overlayCard, 'card');
    const ctaEl = cardEl.querySelector('.card__cta') as HTMLElement;
    this.createOverlayCta(overlayCard, ctaEl);
    this.renderer.appendChild(overlay, overlayCard);
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const width = entry.borderBoxSize[0].inlineSize;
        const height = entry.borderBoxSize[0].blockSize;
        this.renderer.setStyle(overlayCard, 'width', `${width}px`);
        this.renderer.setStyle(overlayCard, 'height', `${height}px`);
      });
    });
    observer.observe(cardEl);
  }

  initOverlay(): void {
    const cards = this.el.nativeElement.querySelectorAll('.card');
    cards.forEach((cardEl: HTMLElement) => this.initOverlayCard(cardEl));
  }
}
