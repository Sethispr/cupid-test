export interface ProgressBarConfig {
  /** Height of the progress bar
   * @default '4px'
   * @example '2px', '0.25rem'
   */
  height?: string;
  /** Color or gradient for the progress bar
   * @default 'rgba(65, 184, 131, 0.7)'
   * @example '#3b82f6', 'linear-gradient(90deg, #8b5cf6, #06b6d4, #10b981)'
   */
  color?: string;
  /** Position of the progress bar
   * @default 'top'
   */
  position?: 'top' | 'bottom';
  /** Animation style for the progress bar
   * @default 'smooth'
   */
  animation?: 'smooth' | 'instant';
  /** CSS z-index value for the progress bar
   * @default 1000
   */
  zIndex?: number;
  /** Whether the plugin is enabled
   * @default true
   */
  enabled?: boolean;
  /** Show progress bar on mobile devices
   * @default true
   */
  showOnMobile?: boolean;
  /** Show progress bar on desktop devices
   * @default true
   */
  showOnDesktop?: boolean;
  /** Debounce delay for scroll events in milliseconds
   * @default 16
   */
  debounce?: number;
  /** Offset from the top or bottom edge in pixels
   * @default 0
   */
  offset?: number;
  /** Custom CSS properties to apply to the progress bar
   * @default { 'border-radius': '0 2px 2px 0' }
   * @example { borderRadius: '0 0 4px 4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }
   */
  customCSS?: Record<string, string>;
}
