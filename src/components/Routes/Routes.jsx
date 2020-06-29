import React from 'react';
import { Switch } from 'react-router-dom';

import Ranking from '../Ranking';
import SignUpPage from '../Sign/SignUp';
import SignInPage from '../Sign/SignIn';
import ForgotPasswordPage from '../ForgotPassword';
import Dashboard from '../Dashboard';
import Subjects from '../Subjects/Subjects';
import CreateSubjectsForm from '../CreateSubject/CreateSubjectsForm'
import CreateQuiz from '../CreateQuiz';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { NotFound } from '../Result';
import QuizList from '../QuizList/QuizList'
import CreateQuestion from '../CreateQuestion/index'
import QuizzesListingStudent from '../QuizzesListing/QuizzesListingStudent';
import QuizzesListingProfessor from '../QuizzesListing/QuizzesListingProfessor';

import { ROUTES } from '../../constants';

const Routes = () => (
  <Switch>
    <PrivateRoute exact path={ROUTES.RANKING} component={Ranking} />
    <PublicRoute exact path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordPage} />
    <PrivateRoute exact path={ROUTES.SUBJECTS} component={Subjects} />
    <PrivateRoute exact path={ROUTES.SUBJECTS_NEW} component={CreateSubjectsForm} />
    <PrivateRoute exact path={ROUTES.DASHBOARD} component={Dashboard} />
    <PrivateRoute exact path={ROUTES.CREATE_QUIZ} component={CreateQuiz} />
    <PrivateRoute exact path={ROUTES.QUIZZES_QUESTIONS} component={QuizList} />
    <PrivateRoute exact path={ROUTES.CREATE_QUESTION} component={CreateQuestion} />
    <PublicRoute restricted exact path={ROUTES.SIGN_UP} component={SignUpPage} />
    <PublicRoute restricted exact path={ROUTES.SIGN_IN} component={SignInPage} />
    <PrivateRoute exact path="/" component={Dashboard} />
    <PrivateRoute exact path = {ROUTES.QUIZZES_OPEN} component={QuizzesListingStudent} />
    <PrivateRoute exact path = {ROUTES.QUIZZES_ANSWERED} component={QuizzesListingProfessor} />
    <PublicRoute path="/" component={NotFound} />
  </Switch>
);

export default Routes;