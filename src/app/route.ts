import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorHomepageComponent } from './author-homepage/author-homepage.component';
import { AuthorInfoComponent } from './author-info/author-info.component';
import { SaleStatisticsComponent } from './sale-statistics/sale-statistics.component';
import { QueryIncomeComponent } from './query-income/query-income.component';
import { ApplyContractComponent } from './apply-contract/apply-contract.component';
import { ApplyGroundingComponent } from './apply-grounding/apply-grounding.component';
import { CommentManagerComponent } from './comment-manager/comment-manager.component';
import { WorksDataComponent } from './works-data/works-data.component'
import { RoyaltiesBillComponent } from './royalties-bill/royalties-bill.component';
import { RewardDetailComponent } from './reward-detail/reward-detail.component';
import { AuthorizeIncomeComponent } from './authorize-income/authorize-income.component';
import { LeftoversDetailComponent } from './leftovers-detail/leftovers-detail.component';
import { WorksStatisticsComponent } from './works-statistics/works-statistics.component';
import { RedStatisticsComponent } from './red-statistics/red-statistics.component';
import { ClickStatisticsComponent } from './click-statistics/click-statistics.component';
import { UpdateAnalysisComponent } from './update-analysis/update-analysis.component';

const appRoutes: Routes = [
	{path:"home",component:AuthorHomepageComponent},
	{path:"author-info",component:AuthorInfoComponent},
	{path:"sale-statistics",component:SaleStatisticsComponent},
	{path:"query-income",component:QueryIncomeComponent,
	children: [
      { path: 'royalties-bill', component: RoyaltiesBillComponent },
      { path: 'reward-detail', component: RewardDetailComponent },
      { path: 'authorize-income', component: AuthorizeIncomeComponent },
      { path: 'leftovers-detail', component: LeftoversDetailComponent }
    ]},
	{path:"apply-contract",component:ApplyContractComponent},
	{path:"apply-grounding",component:ApplyGroundingComponent},
	{path:"comment-manager",component:CommentManagerComponent},
	{path:"works-data",component:WorksDataComponent,
	children: [
      { path: 'works-statistics', component: WorksStatisticsComponent },
      { path: 'red-statistics', component: RedStatisticsComponent },
      { path: 'click-statistics', component: ClickStatisticsComponent },
      { path: 'update-analysis', component: UpdateAnalysisComponent }
    ]},
	{path:"",redirectTo:"/home",pathMatch:"full"},
	{path:"**",component:AuthorHomepageComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}