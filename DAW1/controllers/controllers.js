import Cliente from "../models/Cliente.js";
import Quarto from "../models/Quarto.js";
import Contrato from "../models/Contrato.js";
import Tipquarto from "../models/Tipquarto.js";
import Servico from "../models/Servico.js";
import Extra from "../models/Extra.js";
import Fixo from "../models/Fixo.js";

// --- Cliente ---
function abreAddCliente(req, res) {
    res.render("addCliente");
}
async function addCliente(req, res) {
    await Cliente.create(req.body);
    res.redirect("/cliente/lst");
}
async function listarCliente(req, res) {
    const clientes = await Cliente.find();
    res.render("listarCliente", { clientes });
}
async function filtrarCliente(req, res) {
    const filtro = req.body.filtro;
    const clientes = await Cliente.find({ nome: { $regex: filtro, $options: "i" } });
    res.render("listarCliente", { clientes });
}
async function abreEditCliente(req, res) {
    const cliente = await Cliente.findById(req.params.id);
    res.render("editCliente", { cliente });
}
async function editCliente(req, res) {
    await Cliente.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/cliente/lst");
}
async function deleteCliente(req, res) {
    await Cliente.findByIdAndDelete(req.params.id);
    res.redirect("/cliente/lst");
}

// --- Contrato ---
async function abreAddContrato(req, res) {
    const clientes = await Cliente.find();
    const quartos = await Quarto.find();
    res.render("reserva", { clientes, quartos });
}
async function addContrato(req, res) {
    await Contrato.create(req.body);
    res.redirect("/contrato/lst");
}
async function listarContrato(req, res) {
    const contratos = await Contrato.find().populate("cliente").populate("quarto");
    res.render("listarContrato", { contratos });
}
async function filtrarContrato(req, res) {
    const filtro = req.body.filtro || "";
    const clientes = await Cliente.find({ nome: { $regex: filtro, $options: "i" } });
    const clientesIds = clientes.map(c => c._id);
    const contratos = await Contrato.find({ cliente: { $in: clientesIds } }).populate("cliente").populate("quarto");
    res.render("listarContrato", { contratos });
}
async function abreEditContrato(req, res) {
    const contrato = await Contrato.findById(req.params.id);
    const clientes = await Cliente.find();
    const quartos = await Quarto.find();
    res.render("editContrato", { contrato, clientes, quartos });
}
async function editContrato(req, res) {
    await Contrato.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/contrato/lst");
}
async function deleteContrato(req, res) {
    await Contrato.findByIdAndDelete(req.params.id);
    res.redirect("/contrato/lst");
}

// --- Tipquarto ---
function abreAddTipquarto(req, res) {
    res.render("addTipquarto");
}
async function addTipquarto(req, res) {
    await Tipquarto.create(req.body);
    res.redirect("/tipquarto/lst");
}
async function listarTipquarto(req, res) {
    const tipquartos = await Tipquarto.find();
    res.render("listarTipquarto", { tipquartos });
}
async function filtrarTipquarto(req, res) {
    const filtro = req.body.filtro;
    const tipquartos = await Tipquarto.find({ nome: { $regex: filtro, $options: "i" } });
    res.render("listarTipquarto", { tipquartos });
}
async function abreEditTipquarto(req, res) {
    const tipquarto = await Tipquarto.findById(req.params.id);
    res.render("editTipquarto", { tipquarto });
}
async function editTipquarto(req, res) {
    await Tipquarto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/tipquarto/lst");
}
async function deleteTipquarto(req, res) {
    await Tipquarto.findByIdAndDelete(req.params.id);
    res.redirect("/tipquarto/lst");
}

// --- Quarto ---
function abreAddQuarto(req, res) {
    res.render("addQuarto");
}
async function addQuarto(req, res) {
    await Quarto.create(req.body);
    res.redirect("/quarto/lst");
}
async function listarQuarto(req, res) {
    const quartos = await Quarto.find();
    res.render("listarQuarto", { quartos });
}
async function filtrarQuarto(req, res) {
    const filtro = req.body.filtro;
    const quartos = await Quarto.find({ andar: { $regex: filtro, $options: "i" } });
    res.render("listarQuarto", { quartos });
}
async function abreEditQuarto(req, res) {
    const quarto = await Quarto.findById(req.params.id);
    res.render("editQuarto", { quarto });
}
async function editQuarto(req, res) {
    await Quarto.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/quarto/lst");
}
async function deleteQuarto(req, res) {
    await Quarto.findByIdAndDelete(req.params.id);
    res.redirect("/quarto/lst");
}

// --- Servico ---
function abreAddServico(req, res) {
    res.render("addServico");
}
async function addServico(req, res) {
    await Servico.create(req.body);
    res.redirect("/servico/lst");
}
async function listarServico(req, res) {
    const servicos = await Servico.find();
    res.render("listarServico", { servicos });
}
async function filtrarServico(req, res) {
    const filtro = req.body.filtro;
    const servicos = await Servico.find({ descricao: { $regex: filtro, $options: "i" } });
    res.render("listarServico", { servicos });
}
async function abreEditServico(req, res) {
    const servico = await Servico.findById(req.params.id);
    res.render("editServico", { servico });
}
async function editServico(req, res) {
    await Servico.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/servico/lst");
}
async function deleteServico(req, res) {
    await Servico.findByIdAndDelete(req.params.id);
    res.redirect("/servico/lst");
}

// --- Extra ---
function abreAddExtra(req, res) {
    res.render("addExtra");
}
async function addExtra(req, res) {
    await Extra.create(req.body);
    res.redirect("/extra/lst");
}
async function listarExtra(req, res) {
    const extras = await Extra.find().populate("contrato").populate("servico");
    res.render("listarExtra", { extras });
}
async function filtrarExtra(req, res) {
    const filtro = req.body.filtro;
    const extras = await Extra.find().populate("contrato").populate("servico");
    res.render("listarExtra", { extras });
}
async function abreEditExtra(req, res) {
    const extra = await Extra.findById(req.params.id);
    res.render("editExtra", { extra });
}
async function editExtra(req, res) {
    await Extra.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/extra/lst");
}
async function deleteExtra(req, res) {
    await Extra.findByIdAndDelete(req.params.id);
    res.redirect("/extra/lst");
}

// --- Fixo ---
function abreAddFixo(req, res) {
    res.render("addFixo");
}
async function addFixo(req, res) {
    await Fixo.create(req.body);
    res.redirect("/fixo/lst");
}
async function listarFixo(req, res) {
    const fixos = await Fixo.find().populate("quarto").populate("servico");
    res.render("listarFixo", { fixos });
}
async function filtrarFixo(req, res) {
    const filtro = req.body.filtro;
    const fixos = await Fixo.find().populate("quarto").populate("servico");
    res.render("listarFixo", { fixos });
}
async function abreEditFixo(req, res) {
    const fixo = await Fixo.findById(req.params.id);
    res.render("editFixo", { fixo });
}
async function editFixo(req, res) {
    await Fixo.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/fixo/lst");
}
async function deleteFixo(req, res) {
    await Fixo.findByIdAndDelete(req.params.id);
    res.redirect("/fixo/lst");
}

export {
    abreAddCliente,
    addCliente,
    listarCliente,
    filtrarCliente,
    abreEditCliente,
    editCliente,
    deleteCliente,

    abreAddContrato,
    addContrato,
    listarContrato,
    filtrarContrato,
    abreEditContrato,
    editContrato,
    deleteContrato,

    abreAddTipquarto,
    addTipquarto,
    listarTipquarto,
    filtrarTipquarto,
    abreEditTipquarto,
    editTipquarto,
    deleteTipquarto,

    abreAddQuarto,
    addQuarto,
    listarQuarto,
    filtrarQuarto,
    abreEditQuarto,
    editQuarto,
    deleteQuarto,

    abreAddServico,
    addServico,
    listarServico,
    filtrarServico,
    abreEditServico,
    editServico,
    deleteServico,

    abreAddExtra,
    addExtra,
    listarExtra,
    filtrarExtra,
    abreEditExtra,
    editExtra,
    deleteExtra,

    abreAddFixo,
    addFixo,
    listarFixo,
    filtrarFixo,
    abreEditFixo,
    editFixo,
    deleteFixo
};

