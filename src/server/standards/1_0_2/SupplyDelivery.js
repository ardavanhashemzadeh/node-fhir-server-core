const DomainResource = require('./DomainResource');
const DateTimeScalar = require('./scalars/DateTime.scalar');

class SupplyDelivery extends DomainResource {

	constructor ( opt ) {
		super( opt );
		this.__resourceType = 'SupplyDelivery';
		Object.assign(this, opt);
	}

	// This is a SupplyDelivery resource
	static get __resourceType () {
		return 'SupplyDelivery';
	}

	// Type of this resource.
	get resourceType () {
		return this.__resourceType;
	}

	set resourceType (new_value) {
		this.__SupplyDelivery = new_value;
	}

	// Identifier assigned by the dispensing facility when the item(s) is dispensed.
	get identifier () {
		return this.__identifier;
	}

	set identifier (new_value) {
		const Identifier = require('./Identifier');
		this.__identifier = new Identifier(new_value);
	}

	// A code specifying the state of the dispense event.
	get status () {
		return this.__status;
	}

	set status (new_value) {
		this.__status = new_value;
	}

	// A link to a resource representing the person whom the delivered item is for.
	get patient () {
		return this.__patient;
	}

	set patient (new_value) {
		const Reference = require('./Reference');
		this.__patient = new Reference(new_value);
	}

	// Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
	get type () {
		return this.__type;
	}

	set type (new_value) {
		const CodeableConcept = require('./CodeableConcept');
		this.__type = new CodeableConcept(new_value);
	}

	// The amount of supply that has been dispensed. Includes unit of measure.
	get quantity () {
		return this.__quantity;
	}

	set quantity (new_value) {
		const Quantity = require('./Quantity');
		this.__quantity = new Quantity(new_value);
	}

	// Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.
	get suppliedItem () {
		return this.__suppliedItem;
	}

	set suppliedItem (new_value) {
		const Reference = require('./Reference');
		this.__suppliedItem = new Reference(new_value);
	}

	// The individual responsible for dispensing the medication, supplier or device.
	get supplier () {
		return this.__supplier;
	}

	set supplier (new_value) {
		const Reference = require('./Reference');
		this.__supplier = new Reference(new_value);
	}

	// The time the dispense event occurred.
	get whenPrepared () {
		return this.__whenPrepared;
	}

	set whenPrepared (new_value) {
		const Period = require('./Period');
		this.__whenPrepared = new Period(new_value);
	}

	// The time the dispensed item was sent or handed to the patient (or agent).
	get time () {
		return this.__time;
	}

	set time (new_value) {
		// Throw if new value does not match the pattern
		let pattern = DateTimeScalar.regex();
		if ( new_value && !pattern.test(new_value) ) {
			throw new Error(`Invalid format for ${new_value} on field time`);
		}
		this.__time = new_value;
	}

	// Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
	get destination () {
		return this.__destination;
	}

	set destination (new_value) {
		const Reference = require('./Reference');
		this.__destination = new Reference(new_value);
	}

	// Identifies the person who picked up the Supply.
	get receiver () {
		return this.__receiver;
	}

	set receiver (new_value) {
		const Reference = require('./Reference');
		this.__receiver = Array.isArray(new_value) ? new_value.map(val => new Reference(val)) : [new Reference(new_value)];
	}

	toJSON () {
		return Object.assign(super.toJSON(), {
			resourceType: this.__resourceType,
			identifier: this.__identifier && this.__identifier.toJSON(),
			status: this.__status,
			patient: this.__patient && this.__patient.toJSON(),
			type: this.__type && this.__type.toJSON(),
			quantity: this.__quantity && this.__quantity.toJSON(),
			suppliedItem: this.__suppliedItem && this.__suppliedItem.toJSON(),
			supplier: this.__supplier && this.__supplier.toJSON(),
			whenPrepared: this.__whenPrepared && this.__whenPrepared.toJSON(),
			time: this.__time,
			destination: this.__destination && this.__destination.toJSON(),
			receiver: this.__receiver && this.__receiver.map(v => v.toJSON())
		});
	}
}

module.exports = SupplyDelivery;
