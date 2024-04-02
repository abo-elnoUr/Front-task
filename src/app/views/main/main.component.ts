import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingHeaderComponent } from '../components/landing-header/landing-header.component';
import { WhoAreWeComponent } from '../components/who-are-we/who-are-we.component';
import { CheckoutComponent } from '../components/checkout/checkout.component';
import { OurServiceComponent } from '../components/our-service/our-service.component';
import { AreasComponent } from '../components/areas/areas.component';
import { OurTeamComponent } from '../components/our-team/our-team.component';
import { TrendingComponent } from '../components/trending/trending.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { AgentComponent } from '../components/agent/agent.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    LandingHeaderComponent,
    WhoAreWeComponent,
    CheckoutComponent,
    OurServiceComponent,
    AreasComponent,
    OurTeamComponent,
    TrendingComponent,
    TestimonialsComponent,
    AgentComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
