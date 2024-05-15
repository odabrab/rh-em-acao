import{ StyleSheet } from 'react-native';

//////////////////////////////////////////////////////////////////////
////////  FUNCTION STYLES()
////////
//////////////////////////////////////////////////////////////////////
export default StyleSheet.create({

  btnLabel: {
    color:             "white",
    fontSize:          16,
    fontWeight:        "bold",
    textAlign:         "center",
    textShadowColor:   "black",
    textShadowOffset:  {width: 2, height: 2},
  },

  btnLabelAccount: {
    color:             "white",
    fontSize:          14,
    fontWeight:        "bold",
    textShadowColor:   "orange",
    textShadowOffset:  {width: 2, height: 2},
  },

  btnTouchable00: {
    alignItems:        "center",
    alignSelf:         "center",
    backgroundColor:   "red",
    borderRadius:      50,
    margin:            50,
    padding:           25,
    width:             "30%",
  },

  btnTouchable01: {
    alignItems:        "center",
    alignSelf:         "center",
    backgroundColor:   "#8B0000",
    borderRadius:      40,
    margin:            20,
    padding:           25,
    width:             "70%",
  },

  btnTouchableLeaveLabel: {
    color:             "white",
    fontSize:          16,
    fontWeight:        "bold",
    paddingEnd:        10,
    textShadowColor:   "black",
    textShadowOffset:  {width: 2, height: 2},
  },

  btnTouchableLeft: {
    alignItems:        "left",
    alignSelf:         "left",
    borderRadius:      40,
    margin:            20,
    width:             "100%",
  },

  btnTouchableRight: {
    alignSelf:         "flex-end",
    color:             "white",
    fontSize:          14,
    fontWeight:        "bold",
    textShadowColor:   "black",
    textShadowOffset:  {width: 2, height: 2},
  },

  containerRow: {
    alignItems:        "center",
    alignSelf:         "flex-start",
    flexDirection:     "row",
  },

  containerRowCheckBox: {
    alignItems:        "center",
    backgroundColor:   "white",
    flexDirection:     "row",
    width:             "100%",
  },

  containerRowFooterInitialView: {
    alignItems:        "center",
    flexDirection:     "row",
    justifyContent:    "space-between",
    width:             "100%",
  },

  containerRowHeaderRegisterView: {
    alignItems:        "center",
    backgroundColor:   "white",
    flexDirection:     "row",
    justifyContent:    "space-between",
    width:             "100%",
  },

  containerViewOutter: {
    alignItems:        "center",
    backgroundColor:   "#ecf0f1",
    flex:              1,
    height:            100,
    padding:           10,
  },

  crd: {
    borderColor:       "#8b9cb5",
    borderRadius:      14,
    borderWidth:       2,
    height:            60,
    margin:            14,
    marginBottom:      14,
    paddingHorizontal: 5,
    paddingVertical:   5,
  },

  crdJobsView: {
    backgroundColor:   "white",
    margin:            28,
  },

  logoEstacio: {
    height:            64,
    width:             64,
  },

  paragraph: {
    margin:            20,
    fontSize:          24,
    fontWeight:        "bold",
    textAlign:         "center",
  },

  paragraph01: {
    fontSize:          14,
    fontWeight:        "bold",
    textAlign:         "center",
  },

  paragraphJobsView: {
    fontSize:          14,
    fontWeight:        "bold",
    margin:            28,
    textAlign:         "left",
  },

  txti: {
    backgroundColor:   "white",
    borderColor:       "#8b9cb5",
    borderRadius:      10,
    borderWidth:       2,
    fontSize:          18,
    fontWeight:        "bold",
    height:            40,
    margin:            10,
    marginTop:         5,
    padding:           12,
    textAlign:         "left",
    width:             "80%",
  },
})
