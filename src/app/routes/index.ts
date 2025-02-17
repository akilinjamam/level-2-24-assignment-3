import express from 'express';
import { userRouter } from '../../modules/user/user.route';
import { roomRouter } from '../../modules/room/room.route';
import { slotRouter } from '../../modules/slot/slot.route';
import { bookingRouter } from '../../modules/booking/booking.route';
import { paymentRouter } from '../../modules/payment/payment.route';
import { socketRouter } from '../../modules/socket/socket.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: userRouter,
  },
  {
    path: '/rooms',
    route: roomRouter,
  },
  {
    path: '/slots',
    route: slotRouter,
  },
  {
    path: '/bookings',
    route: bookingRouter,
  },
  {
    path: '/my-bookings',
    route: bookingRouter,
  },
  {
    path: '/success',
    route: paymentRouter,
  },
  {
    path: '/socket',
    route: socketRouter,
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
moduleRoutes.forEach((route) => router.use(route.path, route.route as any));

export default router;
