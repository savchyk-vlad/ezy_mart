export const ThemeLayouts = {
  borderWidth: {
    default: 1,
  },
  padding: {
    xxxxxxl: 28,
    xxxxxl: 24,
    xxxxl: 20,
    xxxl: 16,
    xxl: 14,
    xl: 12,
    l: 10,
  },
  margin: {
    xxxl: 16,
    l: 10,
    xs: 4,
  },
  borderRadius: {
    xl: 12,
    default: 6,
  },
  position: {
    absolute: 'absolute',
    relative: 'relative',
  } as const,
  alignItems: {
    center: 'center',
  } as const,
  justifyContent: {
    flexStart: 'flex-start',
    flexEnd: 'flex-end',
    center: 'center',
    spaceBetween: 'space-between',
  } as const,
  flexDirection: {
    row: 'row',
    column: 'column',
  } as const,
};
