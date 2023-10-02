import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/stylesheet'

// calculator elements for hanc model
export class HANC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            result: 0
        }
    }
    calcHanc = () => {
        if ((this.state.param1) > 0 && (this.state.param2) > 0) {
            this.setState({ result: 68 + 8.5 * Math.log(parseFloat(this.state.param1)) - 20 * Math.log(parseFloat(this.state.param2)) })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcHanc() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for johnson model
export class Johnson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            param3: 0,
            result: 0
        }
    }
    calcJohnson = () => {
        if ((this.state.param1) > 0 && (this.state.param2) > 0 && (this.state.param3) > 0) {
            this.setState({ result: 3.5 + 10 * Math.log((parseFloat(this.state.param1) * Math.pow(parseFloat(this.state.param3), 3)) / parseFloat(this.state.param2)) })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Velocidade mediana dos veículos (em milhas por hora)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param3}
                                onChangeText={(param3) => this.setState({ param3 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcJohnson() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for galloway model
export class Galloway extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            param3: 0,
            param4: 0,
            result: 0
        }
    }
    calcGalloway = () => {
        if ((this.state.param1) > 0 && (this.state.param2) > 0 && (this.state.param3) > 0 && (this.state.param4) > 0) {
            this.setState({ result: 20 + 10 * Math.log((parseFloat(this.state.param1) * Math.pow(parseFloat(this.state.param3), 2)) / parseFloat(this.state.param2)) + 0.4 * parseFloat(this.state.param4)/100 })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Velocidade mediana dos veículos (em milhas por hora)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param3}
                                onChangeText={(param3) => this.setState({ param3 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Porcentagem de veículos pesados em tráfego</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param4}
                                onChangeText={(param4) => this.setState({ param4 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcGalloway() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for burgess model
export class Burgess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            param3: 0,
            result: 0
        }
    }
    calcBurgess = () => {
        if ((this.state.param1) > 0 && (this.state.param2) > 0 && (this.state.param3) > 0) {
            this.setState({ result: 55.5 + 10.2 * Math.log(parseFloat(this.state.param1)) + 0.3 * parseFloat(this.state.param3)/100 - 19.3 * Math.log(parseFloat(this.state.param2)) })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Porcentagem de veículos pesados em tráfego</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param3}
                                onChangeText={(param3) => this.setState({ param3 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcBurgess() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>Leq</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for bolt, beranek and newman model
export class Bolt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            result: 0
        }
    }
    calcBolt = () => {
        if ((this.state.param1) > 0 && (this.state.param2) > 0) {
            this.setState({ result: 83 + 8.5 * Math.log(this.state.param1) - 20 * Math.log(this.state.param2) })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcBolt() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>Leq</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for griffiths and langdon model
export class Griffiths extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            param3: 0,
            resultL10: 0,
            resultL50: 0,
            resultL90: 0,
            resultLeq: 0,
        }
    }
    calcGriffiths = () => {
        if ((this.state.param1) > 0 && (this.state.param2) > 0 && (this.state.param3) > 0) {
            var l50 = 61 + 8.4 * Math.log(parseFloat(this.state.param1)) + 0.15 * parseFloat(this.state.param3)/100 - 11.5 * Math.log(parseFloat(this.state.param2))
            var l10 = 44.8 + 10.8 * Math.log(parseFloat(this.state.param1)) + 0.12 * parseFloat(this.state.param3)/100 - 9.6 * Math.log(parseFloat(this.state.param2))
            var l90 = 39.1 + 10.5 * Math.log(parseFloat(this.state.param1)) + 0.06 * parseFloat(this.state.param3)/100 - 9.3 * Math.log(parseFloat(this.state.param2))
            this.setState({
                resultL10: l10,
                resultL50: l50,
                resultL90: l90,
                resultLeq: parseFloat(l50) + 0.018 * ((parseFloat(l10) - parseFloat(l90)) ** 2)
            })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Distância entre o ponto de observação e o centro da pista (em pés)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Porcentagem de veículos pesados em tráfego</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param3}
                                onChangeText={(param3) => this.setState({ param3 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcGriffiths() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L10</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.resultL10 * 10000)) / 10000}</Text>
                            </View>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.resultL50 * 10000)) / 10000}</Text>
                            </View>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L90</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.resultL90 * 10000)) / 10000}</Text>
                            </View>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>Leq</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.resultLeq * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for fagotti model
export class Fagotti extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            param3: 0,
            param4: 0,
            result: 0
        }
    }
    calcFagotti = () => {
        if ((this.state.param1) > 0 && (this.state.param2) > 0 && (this.state.param3) > 0 && (this.state.param4) > 0) {
            this.setState({ result: 10 * Math.log(parseFloat(this.state.param1) + parseFloat(this.state.param3) + 8 * parseFloat(this.state.param2) + 88 * parseFloat(this.state.param4)) + 33.5 })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos leves</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Quantidade de veículos pesados</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Quantidade de motocicletas</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param3}
                                onChangeText={(param3) => this.setState({ param3 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Quantidade de ônibus</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param4}
                                onChangeText={(param4) => this.setState({ param4 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcFagotti() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>Leq</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.result * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

// calculator elements for cstb model
export class CSTB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            param1: 0,
            param2: 0,
            l50: 0,
            leq: 0,
        }
    }
    calcCSTB = () => {
        if ((this.state.param1) > 0 && (this.state.param2) > 0) {
            var varl50 = 0
            if (this.state.param1 >= 1000) {
                    varl50 = 11.9 * Math.log(this.state.param1) + 31.4
            }
            else {
                    varl50 = 15.5 * Math.log(this.state.param1) - 10 * Math.log(this.state.param2) + 36
            }
            this.setState({ leq: 0.65 * varl50 + 28.8, l50: varl50 })
        }
        else {
            alert("Parâmetros não podem ser nulos")
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.paramContainer}>
                    <ScrollView>
                        <Text style={styles.textSobre}>Quantidade de veículos</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param1}
                                onChangeText={(param1) => this.setState({ param1 })}
                                keyboardType="numeric"
                            />
                        </View>
                        <Text style={styles.textSobre}>Largura da pista (em metros)</Text>
                        <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Utilize pontos para valores decimais"
                                value={this.state.param2}
                                onChangeText={(param2) => this.setState({ param2 })}
                                keyboardType="numeric"
                            />
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.buttonCalc}
                    onPress={() => { this.calcCSTB() }}
                >
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
                <Text style={styles.titleSobre}>Resultados</Text>
                <View style={styles.resultContainer}>
                    <ScrollView>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>L50</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.l50 * 10000)) / 10000}</Text>
                            </View>
                        </View>
                        <View style={styles.resultRow}>
                            <Text style={{ color: "white", fontSize: 30 }}>Leq</Text>
                            <View style={{ paddingTop: 5, paddingBottom: 10 }}>
                                <Text style={styles.textResult}>{(Math.round(this.state.leq * 10000)) / 10000}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}