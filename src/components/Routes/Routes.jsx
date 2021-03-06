import React from 'react';
import { Switch } from 'react-router-dom';

import Ranking from '../Ranking';
import SignUpPage from '../Sign/SignUp';
import SignInPage from '../Sign/SignIn';
import ForgotPasswordPage from '../ForgotPassword';
import Dashboard from '../Dashboard';
import Subjects from '../Subjects/Subjects';
import CreateSubjectsForm from '../CreateSubject/CreateSubjectsForm'
import SubjectsView from '../SubjectsView/SubjectsView'
import CreateQuiz from '../CreateQuiz';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { NotFound } from '../Result';
import Questions from '../Questions'
import CreateQuestion from '../CreateQuestion'
import Quizzes from '../Quizzes';
import Question from '../Question'

import { ROUTES } from '../../constants';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path={ROUTES.RANKING} component={Ranking} />
    <PublicRoute exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
    <PrivateRoute exact path={ROUTES.SUBJECTS} component={Subjects} />
    <PrivateRoute exact path={ROUTES.SUBJECTS_NEW} component={CreateSubjectsForm} />
    <PrivateRoute exact path={ROUTES.SUBJECTS_VIEW} component={SubjectsView} />
    <PrivateRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
    <PrivateRoute exact path={ROUTES.CREATE_QUIZ} component={CreateQuiz} />
    <PrivateRoute exact path={ROUTES.QUIZZES_QUESTIONS} component={Questions} />
    <PublicRoute exact path={ROUTES.QUIZZES_QUESTION} component={Question} />
    <PrivateRoute exact path={ROUTES.CREATE_QUESTION} component={CreateQuestion} />
    <PublicRoute restricted exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <PublicRoute restricted exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <PrivateRoute exact path="/" component={Dashboard} />
    <PrivateRoute exact path = {ROUTES.QUIZZES} component={Quizzes} />
    <PublicRoute path="/" component={NotFound} />
  </Switch>
);

export default Routes;