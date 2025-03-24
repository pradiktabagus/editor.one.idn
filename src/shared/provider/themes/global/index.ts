// ** MUI Imports
import { Theme } from '@mui/material/styles'

const GlobalStyles = (theme: Theme) => {
  return {
    '.demo-space-x > *': {
      marginTop: '1rem !important',
      marginRight: '1rem !important',
      'body[dir="rtl"] &': {
        marginRight: '0 !important',
        marginLeft: '1rem !important'
      }
    },
    '.demo-space-y > *:not(:last-of-type)': {
      marginBottom: '1rem'
    },
    '.MuiGrid-container.match-height .MuiCard-root': {
      height: '100%'
    },
    '.ps__rail-y': {
      zIndex: 1,
      right: '0 !important',
      left: 'auto !important',
      '&:hover, &:focus, &.ps--clicking': {
        backgroundColor: theme.palette.mode === 'light' ? '#F1F0F5 !important' : '#393D55 !important'
      },
      '& .ps__thumb-y': {
        right: '3px !important',
        left: 'auto !important',
        backgroundColor:
          theme.palette.mode === 'light' ? 'rgba(93, 89, 108, 0.2) !important' : 'rgba(207, 211, 236, 0.3) !important'
      },
      '.layout-vertical-nav &': {
        '& .ps__thumb-y': {
          width: 4
        },
        '&:hover, &:focus, &.ps--clicking': {
          backgroundColor: 'transparent !important',
          '& .ps__thumb-y': {
            width: 6
          }
        }
      }
    },

    '#nprogress': {
      pointerEvents: 'none',
      '& .bar': {
        left: 0,
        top: 0,
        height: 3,
        width: '100%',
        zIndex: 2000,
        position: 'fixed',
        backgroundColor: theme.palette.primary.main
      }
    },
    '.react-select': {
      '.react-select-control': {
        borderRadius: "6px",
        border: `1px solid ${theme.palette.divider}`
      },
      '.react-select-placeholder': {
        color: theme.palette.divider
      },
      '.react-multi-select-control': {
        backgroundColor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '4px',
      },
      '.react-select-multi-remove': {
        color: theme.palette.primary.main
      },
      '.react-multi-select-label': {
        color: theme.palette.primary.main
      },
      '.react-multi-value-container': {
        overflowX: 'auto',
        '.react-select-multi-value-container': {
          maxWidth: '-webkit-fill-available'
        }
      }
    },
    '.MuiFormControl-root > .MuiFormLabel-root': {
      zIndex: 0
    },
    '.editor .ProseMirror': {
      minHeight: 300
    },
    '.editor': {
      position: 'relative',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      '.menu': {
        position: 'relative',
        top: 12,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        width: 'calc(100%)',
        flexWrap: 'wrap',
        margin: 0,
        padding: '0 8px',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        border: `1px solid ${theme.palette.neutral[40]}`,
        borderBottom: `2px solid ${theme.palette.neutral[40]}`,
        backgroundColor: theme.palette.neutral[0],
      },
      '.ProseMirror': {
        marginTop: 4,
        padding: '8px 8px 8px',
        border: `1px solid ${theme.palette.neutral[40]}`,
        borderTop: 0,
        borderRadius: 4
      },
      '.ProseMirror-focused': {
        borderColor: theme.palette.primary.main,
        outline: 'none'
      }
    },
    '.react-select-menu-portal': {
      zIndex: '1399 !important',
    },
    '.boxStyled': {
      [theme.breakpoints.up('sm')]: {
        borderRadius: 8,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[2],
        padding: theme.spacing(6),
        backgroundColor: theme.palette.background.paper,
      },
    }
  }
}

export default GlobalStyles
