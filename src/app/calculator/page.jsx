"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

import {
  calcHanc,
  calcJohnson,
  calcGalloway,
  calcBurgess,
  calcGriffiths,
  calcFagotti,
  calcBolt,
  calcCstb
} from "./models";
import useMediaQuery from '@mui/material/useMediaQuery'

const MediaQueryComponent = () => {
  const isDesktop = useMediaQuery('(min-width:800px)');
  const isMobile = useMediaQuery('(max-width:800px)');

  return { isDesktop, isMobile };
};

export default function Calculator() {

  const { isDesktop, isMobile } = MediaQueryComponent();

  const [selectedModel, setSelectedModel] = useState("hanc");
  const [modelValues, setModelValues] = useState({
    param1: "",
    param2: "",
    param3: "",
    param4: "",
  });

  const [result, setResult] = useState({
    l10: "",
    l50: "",
    l90: "",
    leq: "",
  });

  const handleModelChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedModel(selectedOption);
    // limpar os campos
    setModelValues({
      param1: "",
      param2: "",
      param3: "",
      param4: "",
    });
  };

  const handleInputChange = (event) => {
    //  spread operator to update only the relevant field of the state
    setModelValues({
      ...modelValues,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    let newResults = {};

    if (selectedModel === "hanc") {
      newResults = {
        ...newResults,
        l50: calcHanc(modelValues),
      };
    } else if (selectedModel === "johnson") {
      newResults = {
        ...newResults,
        l50: calcJohnson(modelValues),
      };
    } else if (selectedModel === "galloway") {
      newResults = {
        ...newResults,
        l50: calcGalloway(modelValues),
      };
    } else if (selectedModel === "burgess") {
      newResults = {
        ...newResults,
        l50: calcBurgess(modelValues),
      };
    } else if (selectedModel === "griffiths") {
      const griffithsResults = calcGriffiths(modelValues);
      newResults = {
        ...newResults,
        l10: griffithsResults.l10,
        l50: griffithsResults.l50,
        l90: griffithsResults.l90,
        leq: griffithsResults.leq,
      };
    } else if (selectedModel === "fagotti") {
      newResults = {
        ...newResults,
        l50: calcFagotti(modelValues),
      };
    } else if (selectedModel === "bolt") {
      newResults = {
        ...newResults,
        l50: calcBolt(modelValues),
      };
    } else if (selectedModel === "cstb") {
      const cstbResults = calcCstb(modelValues);
      newResults = {
        ...newResults,
        l50: cstbResults.l50,
        leq: cstbResults.leq,
      };
    }
    setResult(newResults);
  }, [modelValues, selectedModel]);

  return (
    <div className={styles.main}>
      {
        isDesktop ? (

          <div className={styles.container}>
            <div className={styles.item1}>
              <h1 className={styles.title}>Parâmetros</h1>
              <p className={styles.item1Text}>Modelo</p>
              {/* calculo dos modelos */}
              <select
                name="models"
                id="models"
                className={`${styles.inputSelect}`}
                onChange={handleModelChange}
              >
                <option className={`${styles.option}`} value="hanc">
                  Hanc
                </option>
                <option className={`${styles.option}`} value="johnson">
                  Johnson
                </option>
                <option className={`${styles.option}`} value="galloway">
                  Galloway
                </option>
                <option className={`${styles.option}`} value="burgess">
                  Burgess
                </option>
                <option className={`${styles.option}`} value="griffiths">
                  Griffiths
                </option>
                <option className={`${styles.option}`} value="fagotti">
                  Fagotti
                </option>
                <option className={`${styles.option}`} value="bolt">
                  Bolt
                </option>
                <option className={`${styles.option}`} value="cstb">
                  CSTB
                </option>
              </select>
              {selectedModel !== "fagotti" && (
                <div>
                  <p className={styles.item1Text}>Qtd. Veículos</p>
                  <input
                    type="number"
                    name="param1"
                    className={`${styles.input}`}
                    value={modelValues.param1}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {selectedModel === "fagotti" && (
                <div>
                  <p className={styles.item1Text}>Qtd. de Veículos leves</p>
                  <input
                    type="number"
                    name="param1"
                    className={`${styles.input}`}
                    value={modelValues.param1}
                    onChange={handleInputChange}
                  />
                  <p className={styles.item1Text}>Qtd. de Veículos pesados</p>
                  <input
                    type="number"
                    name="param2"
                    className={`${styles.input}`}
                    value={modelValues.param2}
                    onChange={handleInputChange}
                  />
                  <p className={styles.item1Text}>Qtd. de motocicletas</p>
                  <input
                    type="number"
                    name="param3"
                    className={`${styles.input}`}
                    value={modelValues.param3}
                    onChange={handleInputChange}
                  />
                  <p className={styles.item1Text}>Qtd. de ônibus</p>
                  <input
                    type="number"
                    name="param4"
                    className={`${styles.input}`}
                    value={modelValues.param4}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {selectedModel !== "fagotti" && selectedModel !== "cstb" && (
                <div>
                  <p className={styles.item1Text}>Distância entre o ponto de observação e o centro da pista (m)</p>
                  <input
                    type="number"
                    name="param2"
                    className={`${styles.input}`}
                    value={modelValues.param2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {selectedModel === "cstb" && (
                <div>
                  <p className={styles.item1Text}>Largura da pista (m)</p>
                  <input
                    type="number"
                    name="param2"
                    className={`${styles.input}`}
                    value={modelValues.param2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
          
              {(selectedModel === "galloway") |
                (selectedModel === "burgess") |
                (selectedModel === "griffiths") && (
                  <div>
                    <p className={styles.item1Text}>
                      Porcentagem de veículos pesados em tráfego (%)
                    </p>
                    <input
                      type="number"
                      name="param3"
                      className={`${styles.input}`}
                      value={modelValues.param3}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              {selectedModel === "johnson" ? (
                <div>
                  <p className={styles.item1Text}>
                    Velocidade mediana dos veículos (km)
                  </p>
                  <input
                    type="number"
                    name="param3"
                    className={`${styles.input}`}
                    value={modelValues.param3}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                selectedModel === "galloway" && (
                  <div>
                    <p className={styles.item1Text}>
                      Velocidade mediana dos veículos (km)
                    </p>
                    <input
                      type="number"
                      name="param4"
                      className={`${styles.input}`}
                      value={modelValues.param4}
                      onChange={handleInputChange}
                    />
                  </div>
                )
              )}
            </div>

            <div className={styles.item2}>
              <h1 className={styles.title}>Resultados</h1>
              {selectedModel === "griffiths" && (
                <div className={styles.resultInput}>
                  <p className={styles.item2Text}>L10 (dB)</p>
                  <input
                    type="number"
                    name="l10"
                    value={result.l10}
                    className={`${styles.input}`}
                    disabled
                  />
                </div>
              )}
              <div className={styles.resultInput}>
                <p className={styles.item2Text}>L50 (dB)</p>
                <input
                  type="number"
                  name="l50"
                  value={result.l50}
                  className={`${styles.input}`}
                  readOnly
                />
              </div>
              {selectedModel === "griffiths" && (
                <div className={styles.resultInput}>
                  <p className={styles.item2Text}>L90 (dB)</p>
                  <input
                    type="number"
                    name="l90"
                    value={result.l90}
                    className={`${styles.input}`}
                    disabled
                  />
                </div>
              )}

              {selectedModel === "burgess" ||
                (selectedModel === "griffiths" ||
                  (selectedModel === "cstb" && (
                    <div className={styles.resultInput}>
                      <p className={styles.item2Text}>Leq (dB)</p>
                      <input
                        type="number"
                        name="leq"
                        value={result.leq}
                        className={`${styles.input}`}
                        disabled
                      />
                    </div>
                  )))}
            </div>
          </div>
        ) : (

          // mobile version code 
          <>
            <div className={styles.container}>
              <h1 className={styles.title}>Parâmetros</h1>
              <p className={styles.item1Text}>Modelo</p>
              {/* calculo dos modelos */}
              <select
                name="models"
                id="models"
                className={`${styles.inputSelect}`}
                onChange={handleModelChange}
              >
                <option className={`${styles.option}`} value="hanc">
                  Hanc
                </option>
                <option className={`${styles.option}`} value="johnson">
                  Johnson
                </option>
                <option className={`${styles.option}`} value="galloway">
                  Galloway
                </option>
                <option className={`${styles.option}`} value="burgess">
                  Burgess
                </option>
                <option className={`${styles.option}`} value="griffiths">
                  Griffiths
                </option>
                <option className={`${styles.option}`} value="fagotti">
                  Fagotti
                </option>
                <option className={`${styles.option}`} value="bolt">
                  Bolt
                </option>
                <option className={`${styles.option}`} value="cstb">
                  CSTB
                </option>
              </select>

              {selectedModel !== "fagotti" && (
                <div>
                  <p className={styles.item1Text}>Qtd. Veículos</p>
                  <input
                    type="number"
                    name="param1"
                    className={`${styles.input}`}
                    value={modelValues.param1}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {selectedModel === "fagotti" && (
                <div>
                  <p className={styles.item1Text}>Qtd. de Veículos leves</p>
                  <input
                    type="number"
                    name="param1"
                    className={`${styles.input}`}
                    value={modelValues.param1}
                    onChange={handleInputChange}
                  />
                  <p className={styles.item1Text}>Qtd. de Veículos pesados</p>
                  <input
                    type="number"
                    name="param2"
                    className={`${styles.input}`}
                    value={modelValues.param2}
                    onChange={handleInputChange}
                  />
                  <p className={styles.item1Text}>Qtd. de motocicletas</p>
                  <input
                    type="number"
                    name="param3"
                    className={`${styles.input}`}
                    value={modelValues.param3}
                    onChange={handleInputChange}
                  />
                  <p className={styles.item1Text}>Qtd. de ônibus</p>
                  <input
                    type="number"
                    name="param4"
                    className={`${styles.input}`}
                    value={modelValues.param4}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {selectedModel !== "fagotti" && selectedModel !== "cstb" && (
                <div>
                  <p className={styles.item1Text}>Distância entre o ponto de observação e o centro da pista (m)</p>
                  <input
                    type="number"
                    name="param2"
                    className={`${styles.input}`}
                    value={modelValues.param2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
              {selectedModel === "cstb" && (
                <div>
                  <p className={styles.item1Text}>Largura da pista (m)</p>
                  <input
                    type="number"
                    name="param2"
                    className={`${styles.input}`}
                    value={modelValues.param2}
                    onChange={handleInputChange}
                  />
                </div>
              )}
    
              {(selectedModel === "galloway") |
                (selectedModel === "burgess") |
                (selectedModel === "griffiths") && (
                  <div>
                    <p className={styles.item1Text}>
                      Porcentagem de veículos pesados em tráfego (%)
                    </p>
                    <input
                      type="number"
                      name="param3"
                      className={`${styles.input}`}
                      value={modelValues.param3}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              {selectedModel === "johnson" ? (
                <div>
                  <p className={styles.item1Text}>
                    Velocidade mediana dos veículos (km) 
                  </p>
                  <input
                    type="number"
                    name="param3"
                    className={`${styles.input}`}
                    value={modelValues.param3}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                selectedModel === "galloway" && (
                  <div>
                    <p className={styles.item1Text}>
                      Velocidade mediana dos veículos (km) 
                    </p>
                    <input
                      type="number"
                      name="param4"
                      className={`${styles.input}`}
                      value={modelValues.param4}
                      onChange={handleInputChange}
                    />
                  </div>
                )
              )}
            </div>

              <div className={styles.container}>

                <h1 className={styles.title}>Resultados</h1>
                {selectedModel === "griffiths" && (
                  <div className={styles.resultInputM}>
                    <p className={styles.item1Text}>L10 (dB)</p>
                    <input
                      type="number"
                      name="l10"
                      value={result.l10}
                      className={`${styles.input}`}
                      disabled
                    />
                  </div>
                )}
                <div className={styles.resultInputM}>
                  <p className={styles.item1Text}>L50 (dB)</p>
                  <input
                    type="number"
                    name="l50"
                    value={result.l50}
                    className={`${styles.input}`}
                    readOnly
                  />
                </div>
                {selectedModel === "griffiths" && (
                  <div className={styles.resultInputM}>
                    <p className={styles.item1Text}>L90 (dB)</p>
                    <input
                      type="number"
                      name="l90"
                      value={result.l90}
                      className={`${styles.input}`}
                      disabled
                    />
                  </div>
                )}

                {selectedModel === "burgess" ||
                  (selectedModel === "griffiths" ||
                    (selectedModel === "cstb" && (
                      <div className={styles.resultInputM}>
                        <p className={styles.item2Text}>Leq (dB)</p>
                        <input
                          type="number"
                          name="leq"
                          value={result.leq}
                          className={`${styles.input}`}
                          disabled
                        />
                      </div>
                    )))}
              </div>
          </>
        )}
    </div>
  );
}
