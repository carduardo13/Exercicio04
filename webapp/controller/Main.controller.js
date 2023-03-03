sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("exercicio4.controller.Main", {
            onInit: function () {


               this._dados = {
                    newAluno:{
                        nome: "",
                        telefone: "",
                        nota: 0
                    },
                    alunos:[{
                        nome: "Carlos",
                        nota: 10,
                        telefone: "975319543"

                    }
                ]
                };

                var oModel = new sap.ui.model.json.JSONModel(this._dados);
                this.getView().setModel(oModel);
                
                //Registra o Message maneger na View
                var oView  = this.getView();
                sap.ui.getCore().getMessageManager().registerObject(oView,true);


            },
            onAdd: function(){
                var oModel = this.getView().getModel();
                var aData = oModel.getProperty("/alunos");
                aData.push(this._dados.newAluno);
                oModel.setProperty("/alunos", aData)
            }
        });
    });
