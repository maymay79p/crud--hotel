import Cliente from "../models/Cliente.js";

export function abreAddCliente(req, res) {
    res.render("addCliente");
}

export async function addCliente(req, res) {
    await Cliente.create(req.body);
    res.redirect("/cliente/add");
}

export async function listarCliente(req, res) {
    const clientes = await Cliente.find();
    res.render("listarCliente", { clientes });
}

export async function filtrarCliente(req, res) {
    const filtro = req.body.filtro;
    const clientes = await Cliente.find({ nome: { $regex: filtro, $options: "i" } });
    res.render("listarCliente", { clientes });
}

export async function abreEditCliente(req, res) {
    const cliente = await Cliente.findById(req.params.id);
    res.render("editCliente", { cliente });
}

export async function editCliente(req, res) {
    await Cliente.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/cliente/lst");
}

export async function deletarCliente(req, res) {
    await Cliente.findByIdAndDelete(req.params.id);
    res.redirect("/cliente/delete/:id");
}


//-------------------------------------------------------------TipQuarto//


import Tipquarto from "../models/Tipquarto.js";


export function abreAddTipQuarto(req, res) {
    res.render("addTipquarto");
}

export async function addTipQuarto(req, res) {
    await Tipquarto.create(req.body);
    res.redirect("/tipquarto/add");
}

export async function listarTipQuarto(req, res) {
    const tipquartos = await Tipquarto.find();
    res.render("listarTipquarto", { tipquartos });
}

export async function filtrarTipQuarto(req, res) {
    const filtro = req.body.filtro;
    const tipquartos = await Tipquarto.find({ nome: { $regex: filtro, $options: "i" } });
    res.render("listarTipquarto", { tipquartos });
}

export async function abreEditTipQuarto(req, res) {
    const tipquarto = await Tipquarto.findById(req.params.id);
    res.render("editTipQuarto", { tipquarto });
}

export async function editTipQuarto(req, res) {
    await Tipquarto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/tipquarto/edit/${req.params.id}`);
}

export async function deletarTipQuarto(req, res) {
    await Tipquarto.findByIdAndDelete(req.params.id);
    res.redirect("/tipquarto/lst");
}

//-------------------------------------------------------------Quarto//

import Quarto from "../models/Quarto.js";

export async function abreAddQuarto(req, res) {
    const tiposBanco = await Tipquarto.find();
    res.render("addQuarto", { tiposBanco });
}
export async function addQuarto(req, res) {
    await Quarto.create(req.body);
    res.redirect("/quarto/add");
}

export async function listarQuarto(req, res) {
    const quartos = await Quarto.find().populate("tipquarto");
    res.render("listarQuarto", { quartos });
}

export async function filtrarQuarto(req, res) {
    const filtro = req.body.filtro;
    const quartos = await Quarto.find({ andar: { $regex: filtro, $options: "i" } }).populate("tipquarto");
    res.render("listarQuarto", { quartos });
}

export async function abreEditQuarto(req, res) {
    const quarto = await Quarto.findById(req.params.id);
    const tiposBanco = await Tipquarto.find();
    res.render("editQuarto", { quarto, tiposBanco});
}


export async function editQuarto(req, res) {
    await Quarto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/quarto/edit/${req.params.id}`);
}

export async function deletarQuarto(req, res) {
    await Quarto.findByIdAndDelete(req.params.id);
    res.redirect("/quarto/lst");
}


//-------------------------------------------------------------Contrato//

import Contrato from "../models/Contrato.js";

export async function abreAddContrato(req, res) {
    const clientes = await Cliente.find();
    const quartos = await Quarto.find().populate("tipquarto")
    res.render("reserva_addContrato", { clientes, quartos });
}

export async function addContrato(req, res) {
    await Contrato.create(req.body);
    res.redirect("/contrato/add");
}

export async function listarContrato(req, res) {
    const contratos = await Contrato.find()
        .populate("cliente")
        .populate({
    path: 'quarto',
    populate: { path: 'tipquarto' }});
    res.render("listarContrato", { contratos });
}

export async function filtrarContrato(req, res) {
    const filtro = req.body.filtro || "";
    const clientes = await Cliente.find({ nome: { $regex: filtro, $options: "i" } });
    const clientesIds = clientes.map(c => c._id);
    const contratos = await Contrato.find({ cliente: { $in: clientesIds } })
        .populate("cliente")
        .populate("quarto");
    res.render("listarContrato", { contratos });
}

export async function abreEditContrato(req, res) {
    const contrato = await Contrato.findById(req.params.id);
    const clientes = await Cliente.find();
    const quartos = await Quarto.find();
    res.render("editContrato", { contrato, clientes, quartos });
}

export async function editContrato(req, res) {
    await Contrato.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/contrato/edit/${req.params.id}`);
}

export async function deletarContrato(req, res) {
    await Contrato.findByIdAndDelete(req.params.id);
    res.redirect("/contrato/lst");
}

export async function abreConfirmacao(req, res) {
    res.render("confirmacao_reserva");
}

//-------------------------------------------------------------Servico//

import Servico from "../models/Servico.js";

export function abreAddServico(req, res) {
    res.render("addServico");
}

export async function addServico(req, res) {
    await Servico.create(req.body);
    res.redirect("/servico/add");
}

export async function listarServico(req, res) {
    const servicos = await Servico.find();
    res.render("listarServico", { servicos });
}

export async function filtrarServico(req, res) {
    const filtro = req.body.filtro;
    const servicos = await Servico.find({ descricao: { $regex: filtro, $options: "i" } });
    res.render("listarServico", { servicos });
}

export async function abreEditServico(req, res) {
    const servico = await Servico.findById(req.params.id);
    res.render("editServico", { servico });
}

export async function editServico(req, res) {
    await Servico.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/servico/edit/${req.params.id}`);
}

export async function deletarServico(req, res) {
    await Servico.findByIdAndDelete(req.params.id);
    res.redirect("/servico/lst");
}


//-------------------------------------------------------------Extra//

import Extra from "../models/Extra.js";

export async function abreAddExtra(req, res) {
        const contratos = await Contrato.find()
            .populate("cliente")
            .populate("quarto");
        const servicos = await Servico.find();
        res.render("addExtra", { contratos, servicos });
    }


export async function addExtra(req, res) {
    await Extra.create(req.body);
    res.redirect("/extra/add");
}

export async function listarExtra(req, res) {
    const extras = await Extra.find()
        .populate({
            path: "contrato",
            populate: [
                { path: "cliente" },
                { path: "quarto" }
            ]
        })
        .populate("servico");
    res.render("listarExtra", { extras });
}

export async function filtrarExtra(req, res) {
    const filtro = req.body.filtro;
    const extras = await Extra.find({}).populate("contrato").populate("servico");
    res.render("listarExtra", { extras });
}

export async function abreEditExtra(req, res) {
    const extra = await Extra.findById(req.params.id);

    const contratos = await Contrato.find()
        .populate("cliente")
        .populate({
            path: "quarto",
            populate: { path: "tipquarto" }
        });
    const servicos = await Servico.find();

    res.render("editExtra", { extra, contratos, servicos });
}

export async function editExtra(req, res) {
    await Extra.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/extra/edit/${req.params.id}`);
}

export async function deletarExtra(req, res) {
    await Extra.findByIdAndDelete(req.params.id);
    res.redirect("/extra/lst");
}


//-------------------------------------------------------------Fixo//

import Fixo from "../models/Fixo.js";

export async function abreAddFixo(req, res) {
  const quartos = await Quarto.find().populate("tipquarto");
  const servicos = await Servico.find();
  res.render("addFixo", { quartos, servicos });
}
export async function addFixo(req, res) {
    await Fixo.create(req.body);
    res.redirect("/fixo/add");
}

export async function listarFixo(req, res) {
    const fixos = await Fixo.find().populate("quarto").populate("servico");
    res.render("listarFixo", { fixos });
}

export async function filtrarFixo(req, res) {
    const filtro = req.body.filtro;
    const fixos = await Fixo.find({}).populate("quarto").populate("servico");
    res.render("listarFixo", { fixos });
}

export async function abreEditFixo(req, res) {
    const fixo = await Fixo.findById(req.params.id);
    res.render("editFixo", { fixo });
}

export async function editFixo(req, res) {
    await Fixo.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/fixo/edit/${req.params.id}`);
}

export async function deletarFixo(req, res) {
    await Fixo.findByIdAndDelete(req.params.id);
    res.redirect("/fixo/lst");
}
