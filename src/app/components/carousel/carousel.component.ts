import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { Project } from 'src/app/types/project.type';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @Input('activeCard') activeCard: number = 0;
  @Input('activeCardWidth') activeCardWidth: number = 0.67;
  @Input('gapBetweenCards') gapBetweenCards: string = '1rem';
  @Input('slideTransitionTimeInMS') slideTransitionTimeInMS: number = 4000;
  @Input('autoScrolling') autoScrolling: boolean = true;
  @Input('autoScrollingDirection') autoScrollingDirection: string = 'left';

  @Input('cards') cards: Project[] = [
    // /*
    {
      title: '0',
      // title: 'Sapienza 0',
      description:
        // 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas rem veniam nulla. Vero expedita voluptatem totam ipsum delectus nobis eveniet voluptas tempore rerum beatae vel aperiam ipsa nam nulla architecto, porro dolore facere praesentium quo. Quam voluptate laborum nulla dolores incidunt necessitatibus hic officiis! Sunt reiciendis nisi doloremque beatae, suscipit, fugiat distinctio vitae officiis accusantium saepe maxime? At deserunt error repudiandae est expedita accusamus animi iste voluptatem nihil ut dicta natus, illum eaque, tenetur distinctio quaerat sunt delectus! Provident, aliquam exercitationem obcaecati quae voluptas molestiae eum maiores praesentium odit. Recusandae eius aliquid delectus facere dolor sequi distinctio quidem similique illum omnis vitae quisquam facilis possimus, tempora molestias tenetur nam doloribus eos odit mollitia officiis ex. Rerum temporibus tempore rem animi, ut.',
        'Sapienza is a fictional small coastal town located in Italy. It is home to the ancestral Villa of the Caruso family, and is the location where the missions World of Tomorrow, The Icon, Landslide, and The Author take place.',
      image_url: 'https://wallpapercave.com/wp/6SLzBEY.jpg',
      // coverImageUrl: 'https://static.wikia.nocookie.net/hitman/images/7/7f/RI5m08L.jpeg',
      links: [
        {
          iconSrc: 'https://api.iconify.design/grommet-icons:github.svg?color=%23888888',
          href: 'https://github.com/vito-tivadar/',
        },
      ],
      tags: [
        {
          text: 'Hey!',
          color: 1,
        },

        {
          text: "It's a me",
          color: 3,
        },

        {
          text: 'Mario',
          color: 0,
        },
        {
          text: 'Mario',
          color: 0,
        },
        {
          text: 'Mario',
          color: 0,
        },
        {
          text: 'Luigi',
          color: 3,
        },
        {
          text: 'Luigi',
          color: 3,
        },
        {
          text: 'Luigi',
          color: 3,
        },
        {
          text: 'Luigi',
          color: 3,
        },
      ],
    },
    {
      title: '1',
      // title: 'Colorado 1',
      description:
        "Colorado is the setting of Freedom Fighters, the fifth main story mission in HITMAN™, as well as The Vector, the third mission in Patient Zero's campaign. A western U.S. state, Colorado has a diverse landscape of arid deserts, river canyons and snow-covered Rocky Mountains, which are partly protected by Rocky Mountain National Park. Elsewhere, Mesa Verde National Park features Ancestral Puebloan cliff dwellings. Perched a mile above sea level, Denver, Colorado’s capital and largest city, features a vibrant downtown area. ",
      image_url:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F6%2F69%2FBanana_(white_background).jpg&f=1&nofb=1&ipt=40cd07b2bf9b2abb2755a435406858a2d07edb4612aaa7e0bc253ce4bbe3e295&ipo=images',
      // coverImageUrl: 'https://static.wikia.nocookie.net/hitman/images/c/cc/X2x9fjC.jpeg',
      links: [],
      tags: [
        {
          text: 'Banana',
          color: 1,
        },
      ],
    },
    {
      title: '2',
      // title: 'Miami 2',
      description:
        'Embark on a sun-drenched mission in Miami where you will attend the final hours of the Global Innovation Race – a motorsports event showcasing the very latest in modern car design. Join a crowd of thousands of excited spectators at the biggest racing event of the year. ',
      image_url: 'https://wallpapercave.com/wp/6SLzBEY.jpg',
      // coverImageUrl: 'https://static.wikia.nocookie.net/hitman/images/8/8b/Miami_-_HITMAN_2.png',
      links: [],
      tags: [
        {
          text: '',
          color: 1,
        },
      ],
    },
    {
      title: '3',
      // title: 'Heaven Island 3',
      description:
        "Agent 47's mission brings him to the sunlit beaches and quiet waves off the coast of Haven Island, Maldives. Enjoy a sunlit stroll and retire for the evening on the deck of a highly secured luxury hotel.",
      image_url: 'https://wallpapercave.com/wp/6SLzBEY.jpg',
      // coverImageUrl: 'https://static.wikia.nocookie.net/hitman/images/6/66/K4QGI5j.jpeg/',
      links: [],
      tags: [
        {
          text: '',
          color: 3,
        },
      ],
    },
    {
      title: '4',
      // title: 'Chongqing 4',
      description:
        "Chongqing is a megacity in southwest China, and the setting for End of an Era, the fourth mission in HITMAN™ III. The mission area encompasses streets, apartments building and shops on a rainy night in Chongqing's Yuzhong District.",
      image_url: 'https://wallpapercave.com/wp/6SLzBEY.jpg',
      // coverImageUrl: 'https://static.wikia.nocookie.net/hitman/images/b/b5/Chongqing_4.png',
      links: [],
      tags: [
        {
          text: '',
          color: 2,
        },
      ],
    },
    {
      title: '5',
      // title: 'Ambrose Island 5',
      description:
        "Chongqing is a megacity in southwest China, and the setting for End of an Era, the fourth mission in HITMAN™ III. The mission area encompasses streets, apartments building and shops on a rainy night in Chongqing's Yuzhong District.",
      image_url: 'https://wallpapercave.com/wp/6SLzBEY.jpg',
      links: [],
      tags: [
        {
          text: '',
          color: 2,
        },
      ],
    },
    //*/
  ];

  numberOfDisplayedCards: number = 3;
  actualNumberOfDisplayedCards: number = this.numberOfDisplayedCards + 2;
  displayedCards: Project[] = []; // this.cards;
  displayedCardsMidpoint: number = Math.round(this.actualNumberOfDisplayedCards / 2);

  cardWidth: number = 0;
  carouselWidth: number = 0;

  leftCardOffset: number = 0;
  rightCardOffset: number = 0;

  shiftCooldown: boolean = false;

  scrollTimerID?: any;

  constructor(private elementRef: ElementRef) {}

  @HostListener('window:resize')
  onResize(): void {
    this.recalculateCardWidth();
  }

  ngOnInit(): void {
    this.recalculateCardWidth();

    // calculate number of cards to left and right from active card
    this.leftCardOffset = this.displayedCardsMidpoint - 1;
    this.rightCardOffset = this.actualNumberOfDisplayedCards - this.displayedCardsMidpoint;

    let leftmostCardIndex = this.activeCard - this.leftCardOffset;
    let rightmostCardIndex = this.activeCard + this.rightCardOffset;

    for (let i = leftmostCardIndex; i <= rightmostCardIndex; i++) {
      let currentCardIndex = this.calculateCardIndex(i);
      this.displayedCards.push(this.cards[currentCardIndex]);
    }

    if (this.autoScrolling) {
      this.scrollTimerID = setInterval(() => {
        this.shiftCards(this.autoScrollingDirection, false);
      }, this.slideTransitionTimeInMS);
    }
  }

  recalculateCardWidth(): void {
    // calculate card width without gap
    let hostElement = this.elementRef.nativeElement;
    this.carouselWidth = hostElement.clientWidth;
    // this.cardWidth = this.carouselWidth / 1.5;
    this.cardWidth = this.carouselWidth * this.activeCardWidth;
  }

  calculateCardIndex(currentIndex: number, translateDirection?: string): number {
    if (translateDirection === 'left') currentIndex++;
    if (translateDirection === 'right') currentIndex--;

    let newIndex = currentIndex % this.cards.length;

    if (newIndex < 0) return this.cards.length + newIndex;
    else return newIndex;
  }

  shiftCards(shiftDirection: string, isManualShift: boolean): void {
    if (this.shiftCooldown) return;
    else {
      this.shiftCooldown = true;
      setTimeout(() => {
        this.shiftCooldown = false;
      }, 500);
    }

    if (isManualShift) clearInterval(this.scrollTimerID);

    if (shiftDirection === 'left') {
      // add new card to array at the end   ->   then remove first item
      let newCardIndex = this.calculateCardIndex(this.activeCard + this.leftCardOffset, shiftDirection);

      this.displayedCards.push(this.cards[newCardIndex]);
      this.displayedCards.shift();
    }
    if (shiftDirection === 'right') {
      // add new card to  array at the start   ->   then remove last item
      let newCardIndex = this.calculateCardIndex(this.activeCard - this.rightCardOffset, shiftDirection);

      this.displayedCards.unshift(this.cards[newCardIndex]);
      this.displayedCards.pop();
    }

    this.activeCard = this.calculateCardIndex(this.activeCard, shiftDirection);
  }

  calculateTranslate(cardIndex: number): string {
    let singleTranslateValue: number = (this.displayedCardsMidpoint - 1 - cardIndex) * -1 * this.cardWidth;

    return singleTranslateValue.toString() + 'px';
  }

  shiftTo(cardIndex: number): string {
    if (cardIndex > this.displayedCardsMidpoint) return 'left';

    if (cardIndex < this.displayedCardsMidpoint) return 'right';

    return '';
  }

  // logDisplayedCards(): void {
  //   let cardTitles: string[] = [];
  //   this.displayedCards.map((c) => {
  //     cardTitles.push(c.title);
  //   });
  //   console.log(cardTitles, this.activeCard);
  // }
}
