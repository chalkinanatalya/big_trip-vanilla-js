import {render} from './render.js';
import FilterView from './view/filter-view.js';
import HeaderInfoContainerView from './view/header-info-container-view.js';
import MainPresenter from './presenter/main-presenter.js';
import PointsModel from './model/points-model.js';

const siteMainHeaderElement = document.querySelector('.trip-main');
const siteHeaderElement = siteMainHeaderElement.querySelector('.trip-controls__filters');
const siteBodyComponent = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const mainPresenter = new MainPresenter(siteBodyComponent, pointsModel);

render(new HeaderInfoContainerView, siteMainHeaderElement, 'afterbegin');
render(new FilterView(), siteHeaderElement);

mainPresenter.init();

