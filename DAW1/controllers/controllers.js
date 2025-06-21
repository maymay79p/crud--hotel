import Cliente from "../models/Cliente.js";

export function abreAddCliente(req, res) {
    res.render("addCliente");
}

export async function addCliente(req, res) {
    await Cliente.create(req.body);
    res.redirect("/clientes");
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
    res.redirect("/clientes");
}

export async function deleteCliente(req, res) {
    await Cliente.findByIdAndDelete(req.params.id);
    res.redirect("/clientes");
}

//-------------------------------------------------------------Quarto//

import Quarto from "../models/Quarto.js";

export function abreAddQuarto(req, res) {
    res.render("addQuarto");
}

export async function addQuarto(req, res) {
    await Quarto.create(req.body);
    res.redirect("/quartos");
}

export async function listarQuarto(req, res) {
    const quartos = await Quarto.find();
    res.render("listarQuarto", { quartos });
}

export async function filtrarQuarto(req, res) {
    const filtro = req.body.filtro;
    const quartos = await Quarto.find({ andar: { $regex: filtro, $options: "i" } });
    res.render("listarQuarto", { quartos });
}

export async function abreEditQuarto(req, res) {
    const quarto = await Quarto.findById(req.params.id);
    res.render("editQuarto", { quarto });
}

export async function editQuarto(req, res) {
    await Quarto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/quartos");
}

export async function deleteQuarto(req, res) {
    await Quarto.findByIdAndDelete(req.params.id);
    res.redirect("/quartos");
}


//-------------------------------------------------------------Contrato//

import Contrato from "../models/Contrato.js";

export async function abreAddContrato(req, res) {
    const clientes = await Cliente.find();
    const quartos = await Quarto.find();
    res.render("reserva", { clientes, quartos });
}

export async function addContrato(req, res) {
    await Contrato.create(req.body);
    res.redirect("/contratos");
}

export async function listarContrato(req, res) {
    const contratos = await Contrato.find()
        .populate("cliente")
        .populate("quarto");
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
    res.redirect("/contratos");
}

export async function deleteContrato(req, res) {
    await Contrato.findByIdAndDelete(req.params.id);
    res.redirect("/contratos");
}


//-------------------------------------------------------------TipQuarto//

import Tipquarto from "../models/Tipquarto.js";

export function abreAddTipquarto(req, res) {
    res.render("addTipquarto");
}

export async function addTipquarto(req, res) {
    await Tipquarto.create(req.body);
    res.redirect("/tipquartos");
}

export async function listarTipquarto(req, res) {
    const tipquartos = await Tipquarto.find();
    res.render("listarTipquarto", { tipquartos });
}

export async function filtrarTipquarto(req, res) {
    const filtro = req.body.filtro;
    const tipquartos = await Tipquarto.find({ nome: { $regex: filtro, $options: "i" } });
    res.render("listarTipquarto", { tipquartos });
}

export async function abreEditTipquarto(req, res) {
    const tipquarto = await Tipquarto.findById(req.params.id);
    res.render("editTipquarto", { tipquarto });
}

export async function editTipquarto(req, res) {
    await Tipquarto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/tipquartos");
}

export async function deleteTipquarto(req, res) {
    await Tipquarto.findByIdAndDelete(req.params.id);
    res.redirect("/tipquartos");
}

//-------------------------------------------------------------Servico//

import Servico from "../models/Servico.js";

export function abreAddServico(req, res) {
    res.render("addServico");
}

export async function addServico(req, res) {
    await Servico.create(req.body);
    res.redirect("/servicos");
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
    res.redirect("/servicos");
}

export async function deleteServico(req, res) {
    await Servico.findByIdAndDelete(req.params.id);
    res.redirect("/servicos");
}


//-------------------------------------------------------------Extra//

import Extra from "../models/Extra.js";

export function abreAddExtra(req, res) {
    res.render("addExtra");
}

export async function addExtra(req, res) {
    await Extra.create(req.body);
    res.redirect("/extras");
}

export async function listarExtra(req, res) {
    const extras = await Extra.find().populate("contrato").populate("servico");
    res.render("listarExtra", { extras });
}

export async function filtrarExtra(req, res) {
    const filtro = req.body.filtro;
    const extras = await Extra.find({}).populate("contrato").populate("servico");
    res.render("listarExtra", { extras });
}

export async function abreEditExtra(req, res) {
    const extra = await Extra.findById(req.params.id);
    res.render("editExtra", { extra });
}

export async function editExtra(req, res) {
    await Extra.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/extras");
}

export async function deleteExtra(req, res) {
    await Extra.findByIdAndDelete(req.params.id);
    res.redirect("/extras");
}


//-------------------------------------------------------------Extra//

import Extra from "../models/Extra.js";

export function abreAddExtra(req, res) {
    res.render("addExtra");
}

export async function addExtra(req, res) {
    await Extra.create(req.body);
    res.redirect("/extras");
}

export async function listarExtra(req, res) {
    const extras = await Extra.find().populate("contrato").populate("servico");
    res.render("listarExtra", { extras });
}

export async function filtrarExtra(req, res) {
    const filtro = req.body.filtro;
    const extras = await Extra.find({}).populate("contrato").populate("servico");
    res.render("listarExtra", { extras });
}

export async function abreEditExtra(req, res) {
    const extra = await Extra.findById(req.params.id);
    res.render("editExtra", { extra });
}

export async function editExtra(req, res) {
    await Extra.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/extras");
}

export async function deleteExtra(req, res) {
    await Extra.findByIdAndDelete(req.params.id);
    res.redirect("/extras");
}


//-------------------------------------------------------------Fixo//

import Fixo from "../models/Fixo.js";

export function abreAddFixo(req, res) {
    res.render("addFixo");
}

export async function addFixo(req, res) {
    await Fixo.create(req.body);
    res.redirect("/fixos");
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
    res.redirect("/fixos");
}

export async function deleteFixo(req, res) {
    await Fixo.findByIdAndDelete(req.params.id);
    res.redirect("/fixos");
}
