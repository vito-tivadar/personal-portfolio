import { Component, Output } from '@angular/core';
import { section } from './types/section.type';
import { TagColor } from './types/tag.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sections: section[] = [
    {
      title: 'About me',
      description:
        "I'm mechanical engineer and software / web developer. I'm also interested in embedded systems and home automation.",
      projects: [],
      skills: [],
    },
    {
      title: 'Mechanical engineering',
      description:
        'In the field of mechanical engineering, I mainly deal with CAD and structural design. Some of the displayed projects were made as hobby and some were school projects.',
      projects: [
        // Engine
        {
          title: 'Inline engine',
          description:
            '4-cylinder inline engine was made using PTC Creo 5. 3D Model includes Engine, water pump and alternator. It consists of more than 130 parts.',
          image_url: 'https://assets.vitotivadar.ovh/mechanical/engine.png',
          links: [],
          tags: [
            {
              text: 'Finished',
              color: TagColor.green,
            },
            {
              text: 'PTC Creo',
              color: TagColor.blue,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // Cyberbike
        {
          title: 'Cyberbike',
          description:
            'Cyberbike is motorbike based on Tesla Cybertruck. Project was made as part of Virtual engineering course in university.',
          image_url: 'https://assets.vitotivadar.ovh/mechanical/cyberbike.png',
          links: [
            {
              href: 'https://drive.google.com/drive/folders/15AY0rKBqjwVzoCNInqIO89dvANvkmZds?usp=sharing',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/google_drive.png',
            },
          ],
          tags: [
            {
              text: 'Finished',
              color: TagColor.green,
            },
            {
              text: 'Blender',
              color: TagColor.blue,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // Custom mouse
        {
          title: 'Custom Mouse',
          description:
            'Custom mouse 3D model was made as part of Surface modelling course in university. Mouse shape is inspired by Logitech Mx Master 3S and designed based on clay model.',
          image_url: 'https://assets.vitotivadar.ovh/mechanical/mouse.png',
          links: [],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Solidworks',
              color: TagColor.blue,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // Server rack
        {
          title: 'Server rack',
          description:
            'Custom server rack design was designed and build for personal use. Rack size is 9U, but model also includes fixed 1U power distribution unit.',
          image_url: 'https://assets.vitotivadar.ovh/mechanical/rack.png',
          links: [
            {
              href: 'https://drive.google.com/drive/folders/1nDxLEY0b8Qaix6exuddNnd5XeRzf_xOY?usp=sharing',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/google_drive.png',
            },
          ],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Solidworks',
              color: TagColor.red,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // Engine
        {
          title: 'Inline engine',
          description:
            '4-cylinder inline engine was made using PTC Creo 5. 3D Model includes Engine, water pump and alternator. It consists of more than 130 parts.',
          image_url: 'https://assets.vitotivadar.ovh/mechanical/engine.png',
          links: [
            {
              href: 'https://drive.google.com/drive/folders/1hkMO1AFQxHTW4o99_uHWQuu5GP5LgnCG?usp=sharing',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/google_drive.png',
            },
          ],
          tags: [
            {
              text: 'Finished',
              color: TagColor.green,
            },
            {
              text: 'PTC Creo',
              color: TagColor.blue,
            },
          ],
        },
        // Cyberbike
        {
          title: 'Cyberbike',
          description:
            'Cyberbike is motorbike based on Tesla Cybertruck. Project was made as part of Virtual engineering course in university.',
          image_url: 'https://assets.vitotivadar.ovh/mechanical/cyberbike.png',
          links: [
            {
              href: 'https://drive.google.com/drive/folders/15AY0rKBqjwVzoCNInqIO89dvANvkmZds?usp=sharing',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/google_drive.png',
            },
          ],
          tags: [
            {
              text: 'Finished',
              color: TagColor.green,
            },
            {
              text: 'Blender',
              color: TagColor.blue,
            },
          ],
        },
        // Custom mouse
        {
          title: 'Custom Mouse',
          description:
            'Custom mouse 3D model was made as part of Surface modelling course in university. Mouse shape is inspired by Logitech Mx Master 3S and designed based on clay model.',
          image_url: 'https://assets.vitotivadar.ovh/mechanical/mouse.png',
          links: [
            {
              href: 'https://drive.google.com/drive/folders/1fIQAcjCO1H65HlByv3Pt-RDTvTx5VhOC?usp=drive_link',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/google_drive.png',
            },
          ],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Solidworks',
              color: TagColor.blue,
            },
          ],
        },
        // Server rack
        {
          title: 'Server rack',
          description:
            'Custom server rack design was designed and build for personal use. Rack size is 9U, but model also includes fixed 1U power distribution unit.',
          image_url: 'https://assets.vitotivadar.ovh/mechanical/rack.png',
          links: [
            {
              href: 'https://drive.google.com/drive/folders/1nDxLEY0b8Qaix6exuddNnd5XeRzf_xOY?usp=sharing',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/google_drive.png',
            },
          ],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Solidworks',
              color: TagColor.red,
            },
          ],
        },
      ],
      skills: [],
    },
    {
      title: 'Software / Web',
      description:
        'Software and web development interest me since 2014. In the beggining it was just a hobby, but in past few years I am trying to follow diferent design principles to optimize and improve quality of code.',
      projects: [
        // personal portfolio
        {
          title: 'Personal portfolio',
          description:
            'Portfolio frontend was made using Angular 15 and is communicating with MySQL database trough ASP.NET Web API backend. Portfolio is running on docker.',
          image_url: 'https://assets.vitotivadar.ovh/software/portfolio.png',
          links: [
            {
              href: '',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/github.png',
            },
          ],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Angular',
              color: TagColor.red,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // dashboard
        {
          title: 'Dashboard',
          description:
            'Dashboard is project for monitoring diferent types of services. It is in early development phase and for my personal needs. Current backend is written in ASP.NET.',
          image_url: 'https://assets.vitotivadar.ovh/software/dashboard.png',
          links: [],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Angular',
              color: TagColor.blue,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // docker backend
        {
          title: 'Docker backend',
          description:
            'Backend written in ASP.NET Web API for use with Dashboard project. Containers and images have full support, volumes and networks have partially support.',
          image_url: 'https://assets.vitotivadar.ovh/software/docker.png',
          links: [
            {
              href: '',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/github.png',
            },
          ],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'C# ASP.NET',
              color: TagColor.blue,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // Truss FEM Software
        {
          title: 'Truss FEM software',
          description:
            "This software is used for analisys of truss structures. It is written in C# and WPF. It uses custom solver and custom MVVM framework. Program was written as part of my bechelor's degree thesis. Future plans are rewritng program for web.",
          image_url: 'https://assets.vitotivadar.ovh/software/fem.png',
          links: [
            {
              href: '',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/github.png',
            },
          ],
          tags: [
            {
              text: 'Inactive development',
              color: TagColor.yellow,
            },
            {
              text: 'C# WPF',
              color: TagColor.blue,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // gps simulator
        {
          title: 'Navigation simulator',
          description:
            "Navigation simulator is simple project written in Angular. This project was written in few hours, it's main purpose was testing how GPS tiles work and how to calculate position and dynamic rendering of tiles. This project is starting point for potential cycling computer me and my friend want to make.",
          image_url: 'https://assets.vitotivadar.ovh/software/navigation.png',
          links: [
            {
              href: '',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/github.png',
            },
          ],
          tags: [
            {
              text: 'Inactive development',
              color: TagColor.red,
            },
            {
              text: 'Angular',
              color: TagColor.blue,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // angular modal
        {
          title: 'Angular modal',
          description:
            'Angular modal library is simple, customizable modal component, written manly for dashboard project.',
          image_url: 'https://assets.vitotivadar.ovh/software/modal.png',
          links: [],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Angular',
              color: TagColor.blue,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // radio player
        {
          title: 'Radio player',
          description:
            'This is very basic program for listening to online radios. It is from early 2015 and is nothing special, but it is one of my firt projects and I am still using it.',
          image_url: 'https://assets.vitotivadar.ovh/software/radio.png',
          links: [
            {
              href: '',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/github.png',
            },
          ],
          tags: [
            {
              text: 'Finished',
              color: TagColor.green,
            },
            {
              text: 'C# WPF',
              color: TagColor.blue,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // discord bots
        {
          title: 'Discord Bots',
          description:
            "This is not single project, but multiple bots. When I was in high school and me and my friends were constantly hanging out on discord I made a lot of discord bots. Some were useful, others were just for fun. Most of them were written in Discord.js v11 and v12 and probably don't work anymore.",
          image_url: 'https://assets.vitotivadar.ovh/software/discord.png',
          links: [],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Node.js',
              color: TagColor.blue,
            },
            {
              text: 'MongoDB',
              color: TagColor.blue,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
      ],
      skills: [],
    },
    {
      title: 'Embedded',
      description:
        "Passion for embedded development came from my brother. He is embedded engineer and I was always fascinated with devices he made. In 2020 I picked up new hobby, home automation. When enterprise product doesn't have features I want, I try to create my own device with custom firmware.",
      projects: [
        // dial gauge converter
        {
          title: 'Dial gauge reader',
          description:
            "Dialgauge reader is middleware device that reads values from dial gauge's serial port. Goal of this project was to replace BL-Touch on 3D printer with dial gauge and improve accuracy of bed leveling.",
          image_url: 'https://assets.vitotivadar.ovh/embedded/gauge.png',
          links: [
            {
              href: '',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/google_drive.png',
            },
          ],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // ender 3 firmware
        {
          title: 'Ender 3 firmware',
          description: 'Configured Marlin firmware with custom written menus for various tasks.',
          image_url: 'https://assets.vitotivadar.ovh/embedded/ender3.png',
          links: [],
          tags: [
            {
              text: 'Inactive development',
              color: TagColor.yellow,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // server case display with temperature monitoring and fan control
        {
          title: 'Server controller',
          description:
            'Raspberry pi controlled display in server rack. Development of this project just started. Initial goal of the project is to measure and display temperature inside rack and control cooling fans based on temperature.',
          image_url: 'https://assets.vitotivadar.ovh/embedded/server.png',
          links: [],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // custom mouse pcb
        {
          title: 'Custom mouse PCB',
          description: '',
          image_url: 'https://assets.vitotivadar.ovh/embedded/mouse.png',
          links: [],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // dial gauge converter
        {
          title: 'Dial gauge reader',
          description:
            "Dialgauge reader is middleware device that reads values from dial gauge's serial port. Goal of this project was to replace BL-Touch on 3D printer with dial gauge and improve accuracy of bed leveling.",
          image_url: 'https://assets.vitotivadar.ovh/embedded/gauge.png',
          links: [
            {
              href: '',
              iconSrc: 'https://assets.vitotivadar.ovh/icons/google_drive.png',
            },
          ],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'MIT Licence',
              color: TagColor.purple,
            },
          ],
        },
        // ender 3 firmware
        {
          title: 'Ender 3 firmware',
          description: 'Configured Marlin firmware with custom written menus for various tasks.',
          image_url: 'https://assets.vitotivadar.ovh/embedded/ender3.png',
          links: [],
          tags: [
            {
              text: 'Inactive development',
              color: TagColor.yellow,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // server case display with temperature monitoring and fan control
        {
          title: 'Server controller',
          description:
            'Raspberry pi controlled display in server rack. Development of this project just started. Initial goal of the project is to measure and display temperature inside rack and control cooling fans based on temperature.',
          image_url: 'https://assets.vitotivadar.ovh/embedded/server.png',
          links: [],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
        // custom mouse pcb
        {
          title: 'Custom mouse PCB',
          description:
            'Idea for this project came when I was modeling custmo mouse shell. Project is based on STM32F103 and it currently supports communication with PMW3389 sensor.',
          image_url: 'https://assets.vitotivadar.ovh/embedded/mouse.png',
          links: [],
          tags: [
            {
              text: 'Active development',
              color: TagColor.yellow,
            },
            {
              text: 'Unreleased',
              color: TagColor.purple,
            },
          ],
        },
      ],
      skills: [],
    },
  ];

  @Output('activeSection') activeSection: number = 0;

  generateSectionId(sectionTitle: string): string {
    return sectionTitle.replace(' ', '-').toLowerCase();
  }

  onActiveSectionChange(div: HTMLDivElement) {
    let newActiveSection = Math.round((div.scrollTop / div.scrollHeight) * div.childElementCount);

    this.activeSection = newActiveSection;
  }
}
