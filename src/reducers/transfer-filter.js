const initialFilterState = { none: false, all: false, oneTrans: false, twoTrans: false, threeTrans: false }

const transferFilterReducer = (state = initialFilterState, action) => {
  const { none, all, oneTrans, twoTrans, threeTrans } = state

  switch (action.type) {
    case 'NONE':
      return state

    case 'ALL':
      if (all) return initialFilterState

      return { ...state, all: !all }

    case 'WITHOUT_TRANSFER':
      if (all) return { ...state, all: !all, none: !none }

      return { ...state, none: !none }

    case 'ONE_TRANSFER':
      if (all) return { ...state, all: !all, oneTrans: !oneTrans }

      return { ...state, oneTrans: !oneTrans }

    case 'TWO_TRANSFERS':
      if (all) return { ...state, all: !all, twoTrans: !twoTrans }

      return { ...state, twoTrans: !twoTrans }

    case 'THREE_TRANSFERS':
      if (all) return { ...state, all: !all, threeTrans: !threeTrans }

      return { ...state, threeTrans: !threeTrans }

    default:
      return state
  }
}

export default transferFilterReducer
