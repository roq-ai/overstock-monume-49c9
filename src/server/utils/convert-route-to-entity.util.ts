const mapping: Record<string, string> = {
  bookings: 'booking',
  monuments: 'monument',
  organizations: 'organization',
  payments: 'payment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
