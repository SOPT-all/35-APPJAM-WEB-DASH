import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { LoginCallback } from '@/pages/auth/auth';
import ClassRegisterCompletion from '@/pages/instructor/classRegisterCompletion/ClassRegisterCompletion';
import { CheckoutPage } from '@/pages/reservation/components/TossPayments/CheckOut/CheckOut';
import { FailPage } from '@/pages/reservation/components/TossPayments/Fail/Fail';
import { SuccessPage } from '@/pages/reservation/components/TossPayments/Success/Success';
import { ROUTES_CONFIG } from './routesConfig';

const Home = lazy(() => import('@/pages/home/Home'));
const Login = lazy(() => import('@/pages/login/Login'));
const Onboarding = lazy(() => import('@/pages/onboarding/Onboarding'));
const Search = lazy(() => import('@/pages/search/Search'));
const Class = lazy(() => import('@/pages/class/Class'));
const Dancer = lazy(() => import('@/pages/dancer/Dancer'));
const Reservation = lazy(() => import('@/pages/reservation/Reservation'));
const MyPageReservation = lazy(() => import('@/pages/mypage/mypageReservation/MypageReservation'));
const MyPageReservationDetail = lazy(() => import('@/pages/mypage/mypageReservationDetail/MypageReservationDetail'));
const ClassRegister = lazy(() => import('@/pages/instructor/classRegister/ClassRegister'));
const InstructorRegister = lazy(() => import('@/pages/instructorRegister/InstructorRegister'));
const ClassDetail = lazy(() => import('@/pages/instructor/classDetail/ClassDetail'));
const ClassList = lazy(() => import('@/pages/instructor/classList/ClassList'));
const Error = lazy(() => import('@/pages/error/Error'));

export const router = createBrowserRouter([
  {
    path: ROUTES_CONFIG.home.path,
    element: <Home />,
  },
  {
    path: ROUTES_CONFIG.login.path,
    element: <Login />,
  },
  {
    path: ROUTES_CONFIG.auth.path,
    element: <LoginCallback />,
  },
  {
    path: ROUTES_CONFIG.onboarding.path,
    element: <Onboarding />,
  },
  {
    path: ROUTES_CONFIG.search.path,
    element: <Search />,
  },
  {
    path: ROUTES_CONFIG.class.path(':id'),
    element: <Class />,
  },
  {
    path: ROUTES_CONFIG.dancer.path(':id'),
    element: <Dancer />,
  },
  {
    path: ROUTES_CONFIG.reservation.path(':id'),
    element: <Reservation />,
  },
  {
    path: ROUTES_CONFIG.mypageReservation.path,
    element: <MyPageReservation />,
  },
  {
    path: ROUTES_CONFIG.mypageReservationDetail.path(':id'),
    element: <MyPageReservationDetail />,
  },
  {
    path: ROUTES_CONFIG.classRegister.path,
    element: <ClassRegister />,
  },
  {
    path: ROUTES_CONFIG.classRegisterCompletion.path,
    element: <ClassRegisterCompletion />,
  },
  {
    path: ROUTES_CONFIG.instructorRegister.path,
    element: <InstructorRegister />,
  },
  {
    path: ROUTES_CONFIG.instructorClassDetail.path(':id'),
    element: <ClassDetail />,
  },
  {
    path: ROUTES_CONFIG.instructorClassList.path,
    element: <ClassList />,
  },
  {
    path: ROUTES_CONFIG.payments.path,
    element: <CheckoutPage />,
  },
  {
    path: ROUTES_CONFIG.paymentsSuccess.path,
    element: <SuccessPage />,
  },
  {
    path: ROUTES_CONFIG.paymentsFail.path,
    element: <FailPage />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);
