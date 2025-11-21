
const handleCheckIn = () => {
    if (!selectedBed || !selectedWorker) return;

    const worker = mockWorkers.find(w => w.id === selectedWorker);
    if (!worker) return;

    // Update bed status
    setBeds(beds.map(b =>
        b.id === selectedBed.id
            ? { ...b, status: 'Occupied' as const, occupant: { workerId: worker.id, workerName: worker.fullName, checkInDate: new Date().toISOString().split('T')[0] } }
            : b
    ));

    // Add to log
    const newLog: CheckInOutLog = {
        id: `L${String(checkInOutLog.length + 1).padStart(3, '0')}`,
        workerId: worker.id,
        workerName: worker.fullName,
        action: 'Check-in',
        bedId: selectedBed.id,
        return(
    <div className = "min-h-screen bg-[var(--color-bg-secondary)]" >
                {/* Header */ }
                < header className = "bg-[var(--color-neutral-charcoal)] text-white py-6 shadow-md" >
                    <div className="container-custom">
                        <h1 className="text-3xl font-bold">Accommodation Center</h1>
                        <p className="text-sm opacity-90 mt-1">Manage beds and track worker check-ins/check-outs</p>
                    </div>
        </header >

    <div className="container-custom py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
                <div className="text-4xl font-bold text-[var(--color-primary-ochre)] mb-2">
                    {totalBeds}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">Total Beds</p>
            </Card>

            <Card className="text-center">
                <div className="text-4xl font-bold text-[var(--color-error)] mb-2">
                    {occupiedBeds}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">Occupied</p>
            </Card>

            <Card className="text-center">
                <div className="text-4xl font-bold text-[var(--color-success)] mb-2">
                    {availableBeds}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">Available</p>
            </Card>

            <Card className="text-center">
                <div className="text-4xl font-bold text-[var(--color-warning)] mb-2">
                    {maintenanceBeds}
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">Maintenance</p>
            </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Bed Management */}
            <div className="lg:col-span-2 space-y-6">
                <Card>
                    <h2 className="text-xl font-bold mb-4">Bed Management</h2>

                    {Object.entries(groupedBeds).map(([roomNumber, roomBeds]) => (
                        <div key={roomNumber} className="mb-6 last:mb-0">
                            <h3 className="font-semibold mb-3 text-lg">Room {roomNumber}</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {roomBeds.map(bed => (
                                    <div
                                        key={bed.id}
                                        className={`p-4 rounded border-2 ${bed.status === 'Occupied' ? 'border-[var(--color-error)] bg-[var(--color-error-light)]' :
                                            bed.status === 'Available' ? 'border-[var(--color-success)] bg-[var(--color-success-light)]' :
                                                'border-[var(--color-warning)] bg-[var(--color-warning-light)]'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-semibold">Bed {bed.bedNumber}</span>
                                            <Badge variant={
                                                bed.status === 'Occupied' ? 'error' :
                                                    bed.status === 'Available' ? 'success' : 'warning'
                                                variant="secondary"
                                                size="small"
                                                fullWidth
                                                onClick={() => {
                                                    setSelectedBed(bed);
                                                    setShowCheckInModal(true);
                                                }}
                                            >
                                                Assign Worker
                                            </Button>
                                            ) : (
                                            <p className="text-sm text-[var(--color-warning-dark)]">
                                                Under maintenance
                                            </p>
                                        )}
                                        </div>
                                ))}
                                        {/* Check-in Modal */}
                                        {
                                            showCheckInModal && (
                                                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                                                    <Card className="max-w-md w-full mx-4">
                                                        <h3 className="text-xl font-bold mb-4">Assign Worker to Bed</h3>

                                                        Check In
                                                    </Button>
                                                </div>
                                            )
                                        }
                                    </div >
                                );
}
