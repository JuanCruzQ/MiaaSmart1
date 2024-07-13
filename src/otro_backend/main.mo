import Debug "mo:base/Debug";
import Principal "mo:base/Principal";

actor class MiaaSmart() = this {
    
    public shared ({ caller }) func pagaRecibo() : async Text {
        Debug.print("pagaRecibo called by " # Principal.toText(caller));
        // Implementa la lógica de pago aquí
        return "Recibo pagado";
    };

    public shared ({ caller }) func recibeReciboDigital() : async Text {
        Debug.print("recibeReciboDigital called by " # Principal.toText(caller));
        // Implementa la lógica de recibir recibo digital aquí
        return "Recibo digital recibido";
    };

    public shared ({ caller }) func generarReporte() : async Text {
        Debug.print("generarReporte called by " # Principal.toText(caller));
        // Implementa la lógica de generar reporte aquí
        return "Reporte generado";
    };

    public shared ({ caller }) func mostrarMapa() : async Text {
        Debug.print("mostrarMapa called by " # Principal.toText(caller));
        // Implementa la lógica de mostrar mapa aquí
        return "Mapa mostrado";
    };
};