const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class CommunicationRequest extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'CommunicationRequest';
		Object.assign(this, opt);
	}

	// This is a CommunicationRequest resource
	static get __resourceType () {
		return 'CommunicationRequest';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__CommunicationRequest = new_value;
	}

	// A unique ID of this request for reference purposes. It must be provided if user wants it returned as part of any output, otherwise it will be autogenerated, if needed, by CDS system. Does not need to be the actual ID of the source system.
	get identifier () {
		return this.__identifier;
	}

	set identifier (new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = Array.isArray(new_value) ? new_value.map(val => new Identifier(val)) : [new Identifier(new_value)];
	}

	// The type of message to be sent such as alert, notification, reminder, instruction, etc.
	get category () {
		return this.__category;
	}

	set category (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__category = new CodeableConcept(new_value);
	}

	// The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
	get sender () {
		return this.__sender;
	}

	set sender (new_value) {
		const Reference = require('./Reference');
		this.__sender = new Reference(new_value);
	}

	// The entity (e.g. person, organization, clinical information system, or device) which is the intended target of the communication.
	get recipient () {
		return this.__recipient;
	}

	set recipient (new_value) {
		const Reference = require('./Reference');
		this.__recipient = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	// Text, attachment(s), or resource(s) to be communicated to the recipient.
	get payload () {
		return this.__payload;
	}

	set payload (new_value) {
		const CommunicationRequestPayload = require('./CommunicationRequestPayload');
		this.__payload = Array.isArray(new_value) ? new_value.map(val => new CommunicationRequestPayload(val)) : [new CommunicationRequestPayload(new_value)];
	}

	// A channel that was used for this communication (e.g. email, fax).
	get medium () {
		return this.__medium;
	}

	set medium (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__medium = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The responsible person who authorizes this order, e.g. physician. This may be different than the author of the order statement, e.g. clerk, who may have entered the statement into the order entry application.
	get requester () {
		return this.__requester;
	}

	set requester (new_value) {
		const Reference = require('./Reference');
		this.__requester = new Reference(new_value);
	}

	// The status of the proposal or order.
	get status () {
		return this.__status;
	}

	set status (new_value) {
		this.__status = new_value;
	}

	// The encounter within which the communication request was created.
	get encounter () {
		return this.__encounter;
	}

	set encounter (new_value) {
		const Reference = require('./Reference');
		this.__encounter = new Reference(new_value);
	}

	// The time when this communication is to occur.
	get scheduledDateTime () {
		return this.__scheduledDateTime;
	}

	set scheduledDateTime (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field scheduledDateTime`);
		}
		this.__scheduledDateTime = new_value;
	}

	// The time when this communication is to occur.
	get scheduledPeriod () {
		return this.__scheduledPeriod;
	}

	set scheduledPeriod (new_value) {
		const Period = require('./Period');
		this.__scheduledPeriod = new Period(new_value);
	}

	// The reason or justification for the communication request.
	get reason () {
		return this.__reason;
	}

	set reason (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__reason = Array.isArray(new_value) ? new_value.map(val => new CodeableConcept(val)) : [new CodeableConcept(new_value)];
	}

	// The time when the request was made.
	get requestedOn () {
		return this.__requestedOn;
	}

	set requestedOn (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field requestedOn`);
		}
		this.__requestedOn = new_value;
	}

	// The patient who is the focus of this communication request.
	get subject () {
		return this.__subject;
	}

	set subject (new_value) {
		const Reference = require('./Reference');
		this.__subject = new Reference(new_value);
	}

	// Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
	get priority () {
		return this.__priority;
	}

	set priority (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__priority = new CodeableConcept(new_value);
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.map(v => v.toJSON()),
			category: this.__category && this.__category.toJSON(),
			sender: this.__sender && this.__sender.toJSON(),
			recipient: this.__recipient && this.__recipient.map(v => v.toJSON()),
			payload: this.__payload && this.__payload.map(v => v.toJSON()),
			medium: this.__medium && this.__medium.map(v => v.toJSON()),
			requester: this.__requester && this.__requester.toJSON(),
			status: this.__status,
			encounter: this.__encounter && this.__encounter.toJSON(),
			scheduledDateTime: this.__scheduledDateTime,
			scheduledPeriod: this.__scheduledPeriod && this.__scheduledPeriod.toJSON(),
			reason: this.__reason && this.__reason.map(v => v.toJSON()),
			requestedOn: this.__requestedOn,
			subject: this.__subject && this.__subject.toJSON(),
			priority: this.__priority && this.__priority.toJSON()
		});
	}
}

module.exports = CommunicationRequest;
