def study_schedule(permanence_period, target_time):
    student_qty = 0
    if target_time is None:
        return None
    for element in permanence_period:
        if all(isinstance(item, int) for item in element):
            if element[0] <= target_time <= element[1]:
                student_qty += 1
        else:
            return None

    return student_qty
