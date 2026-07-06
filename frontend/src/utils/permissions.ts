export function hasPermission(userRole: string, requiredRole: string) {
  return userRole === requiredRole;
}
