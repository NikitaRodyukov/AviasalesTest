const initialFilterState = {
  all: true,
  straight: true,
  oneTrans: true,
  twoTrans: true,
  threeTrans: true,
}

const transferFilterReducer = (state = initialFilterState, action) => {
  const { straight, all, oneTrans, twoTrans, threeTrans } = state

  switch (action.type) {
    case 'NONE':
      return state

    case 'ALL':
      if (all)
        return {
          all: false,
          straight: false,
          oneTrans: false,
          twoTrans: false,
          threeTrans: false,
        }

      return initialFilterState

    case 'WITHOUT_TRANSFER':
      if (all) return { ...state, all: !all, straight: !straight }

      if (!all && oneTrans && twoTrans && threeTrans)
        return { ...state, all: !all, straight: !straight }

      return { ...state, straight: !straight }

    case 'ONE_TRANSFER':
      if (all) return { ...state, all: !all, oneTrans: !oneTrans }

      if (!all && straight && twoTrans && threeTrans)
        return { ...state, all: !all, oneTrans: !oneTrans }

      return { ...state, oneTrans: !oneTrans }

    case 'TWO_TRANSFERS':
      if (all) return { ...state, all: !all, twoTrans: !twoTrans }

      if (!all && oneTrans && straight && threeTrans)
        return { ...state, all: !all, twoTrans: !twoTrans }

      return { ...state, twoTrans: !twoTrans }

    case 'THREE_TRANSFERS':
      if (all) return { ...state, all: !all, threeTrans: !threeTrans }

      if (!all && oneTrans && twoTrans && straight)
        return { ...state, all: !all, threeTrans: !threeTrans }

      return { ...state, threeTrans: !threeTrans }

    default:
      return state
  }
}

export default transferFilterReducer
