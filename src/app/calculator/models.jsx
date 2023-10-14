export function calcHanc(modelValues) {
  if (modelValues.param1 > 0 && modelValues.param2 > 0) {
    return (
      68 +
      8.5 * Math.log(parseFloat(modelValues.param1)) -
      20 * Math.log(parseFloat(modelValues.param2 * 3.281))  // Conversão de metros para ft
    ).toFixed(2);
  } else {
    return "";
  }
}

export function calcJohnson(modelValues) {
  if (
    modelValues.param1 > 0 &&
    modelValues.param2 > 0 &&
    modelValues.param3 > 0
  ) {
    return (
      3.5 +
      10 *
        Math.log(
          (parseFloat(modelValues.param1) *
            Math.pow(parseFloat(modelValues.param3 /  1.609 // Conversão de km para milhas
            ), 3)) /
            parseFloat(modelValues.param2  * 3.281)
        )
    ).toFixed(2);
  } else {
    return "";
  }
}

export function calcGalloway(modelValues) {
  if (
    modelValues.param1 > 0 &&
    modelValues.param2 > 0 &&
    modelValues.param3 > 0 &&
    modelValues.param4 > 0
  ) {
    return (
      20 +
      10 *
        Math.log(
          (parseFloat(modelValues.param1) *
            Math.pow(parseFloat(modelValues.param3 / 1.609), 2)) /
            parseFloat(modelValues.param2  * 3.281)
        ) +
      0.4 * (parseFloat(modelValues.param4) / 100)
    ).toFixed(2);
  } else {
    return "";
  }
}

export function calcBurgess(modelValues) {
  if (
    modelValues.param1 > 0 &&
    modelValues.param2 > 0 &&
    modelValues.param3 > 0
  ) {
    return (
      55.5 +
      10.2 * Math.log(parseFloat(modelValues.param1)) +
      (0.3 * parseFloat(modelValues.param3 / 1.609)) / 100 -
      19.3 * Math.log(parseFloat(modelValues.param2  * 3.281))
    ).toFixed(2);
  } else {
    return "";
  }
}

export function calcGriffiths(modelValues) {
  if ((modelValues.param1) > 0 && (modelValues.param2) > 0 && (modelValues.param3) > 0)
    {
    const l50 =
      61 +
      8.4 * Math.log(parseFloat(modelValues.param1)) +
      (0.15 * parseFloat(modelValues.param3 / 1.609)) / 100 -
      11.5 * Math.log(parseFloat(modelValues.param2  * 3.281));
    const l10 =
      44.8 +
      10.8 * Math.log(parseFloat(modelValues.param1)) +
      (0.12 * parseFloat(modelValues.param3 / 1.609)) / 100 -
      9.6 * Math.log(parseFloat(modelValues.param2  * 3.281));
    const l90 =
      39.1 +
      10.5 * Math.log(parseFloat(modelValues.param1)) +
      (0.06 * parseFloat(modelValues.param3 / 1.609)) / 100 -
      9.3 * Math.log(parseFloat(modelValues.param2  * 3.281));
      const leq = 
      parseFloat(l50) + 
      0.018 * ((parseFloat(l10) - 
      parseFloat(l90)) ** 2)
    return { l10: l10.toFixed(2), l50: l50.toFixed(2), l90: l90.toFixed(2), leq: leq.toFixed(2) };
  } else {
    return { l10: "", l50: "", l90: "", leq: ""};
  }
}

export function calcFagotti(modelValues){
  if ((modelValues.param1) > 0 && (modelValues.param2) > 0 && (modelValues.param3) > 0 && (modelValues.param4) > 0) {
    return(
      10 * Math.log(parseFloat(modelValues.param1) + parseFloat(modelValues.param3 / 1.609) + 8 * parseFloat(modelValues.param2  * 3.281) + 88 * parseFloat(modelValues.param4)) + 33.5 ).toFixed(2)
    } else {
      return "";
    }
}

export function calcBolt(modelValues){
  if ((modelValues.param1) > 0 && (modelValues.param2) > 0) {
    return(
      83 + 8.5 * Math.log(modelValues.param1) - 20 * Math.log(modelValues.param2)
    ).toFixed(2)
} else {
  return "";
}
}

export function calcCstb(modelValues) {
  let l50 = 0;
  let leq = 0;

  if (modelValues.param1 > 0 && modelValues.param2 > 0) {
    if (modelValues.param1 >= 1000) {
      l50 = 11.9 * Math.log(modelValues.param1) + 31.4;
    } else {
      l50 = 15.5 * Math.log(modelValues.param1) - 10 * Math.log(modelValues.param2) + 36;
    }
    leq = 0.65 * l50 + 28.8;

    return {
      l50: l50.toFixed(2),
      leq: leq.toFixed(2),
    };
  } else {
    return { l50: "", leq: ""};
  }
}