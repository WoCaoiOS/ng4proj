import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './route';
import { AngularEchartsModule } from 'ngx-echarts';
import { AuthorHomepageComponent } from './author-homepage/author-homepage.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { SaleStatisticsComponent } from './sale-statistics/sale-statistics.component';
import { QueryIncomeComponent } from './query-income/query-income.component';
import { ApplyContractComponent } from './apply-contract/apply-contract.component';
import { ApplyGroundingComponent } from './apply-grounding/apply-grounding.component';
import { CommentManagerComponent } from './comment-manager/comment-manager.component';
import { WorksDataComponent } from './works-data/works-data.component';
import { RoyaltiesBillComponent } from './royalties-bill/royalties-bill.component';
import { RewardDetailComponent } from './reward-detail/reward-detail.component';
import { AuthorizeIncomeComponent } from './authorize-income/authorize-income.component';
import { LeftoversDetailComponent } from './leftovers-detail/leftovers-detail.component';
import { WorksStatisticsComponent } from './works-statistics/works-statistics.component';
import { RedStatisticsComponent } from './red-statistics/red-statistics.component';
import { ClickStatisticsComponent } from './click-statistics/click-statistics.component';
import { UpdateAnalysisComponent } from './update-analysis/update-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorHomepageComponent,
    AuthorInfoComponent,
    SaleStatisticsComponent,
    QueryIncomeComponent,
    ApplyContractComponent,
    ApplyGroundingComponent,
    CommentManagerComponent,
    WorksDataComponent,
    RoyaltiesBillComponent,
    RewardDetailComponent,
    AuthorizeIncomeComponent,
    LeftoversDetailComponent,
    WorksStatisticsComponent,
    RedStatisticsComponent,
    ClickStatisticsComponent,
    UpdateAnalysisComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,AngularEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
