class NotesHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    // Menetapkan konteks "this" pada class ini supaya "this" tidak dianggap kelas lain.
    this.postNoteHandler = this.postNoteHandler.bind(this);
    this.getNotesHandler = this.getNotesHandler.bind(this);
    this.getNoteByIdHandler = this.getNoteByIdHandler.bind(this);
    this.putNoteByIdHandler = this.putNoteByIdHandler.bind(this);
    this.deleteNoteByIdHandler = this.deleteNoteByIdHandler.bind(this);
  }

  postNoteHandler(request, h) {
    this._validator.validateNotePayload(request.payload);
    const { title = "untitled", tags, body } = request.payload;

    const noteId = this._service.addNote({ title, body, tags });

    const response = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan",
      data: {
        noteId,
      },
    });
    response.code(201);
    return response;
  }

  getNotesHandler() {
    const notes = this._service.getNotes();
    return {
      status: "success",
      data: {
        notes,
      },
    };
  }

  getNoteByIdHandler(request, h) {
    const { id } = request.params;
    const note = this._service.getNoteById(id);

    return {
      status: "success",
      data: {
        note,
      },
    };
  }

  putNoteByIdHandler(request, h) {
    this._validator.validateNotePayload(request.payload);
    const { id } = request.params;

    this._service.editNoteById(id, request.payload);

    return {
      status: "success",
      message: "Catatan berhasil diperbarui",
    };
  }

  deleteNoteByIdHandler(request, h) {
    const { id } = request.params;

    this._service.deleteNoteById(id);

    return {
      status: "success",
      message: "Catatan berhasil dihapus",
    };
  }
}

module.exports = NotesHandler;
