import pytest
from ting_file_management.priority_queue import PriorityQueue


def test_basic_priority_queueing():

    priority_queue = PriorityQueue()
    high_priority = {"qtd_linhas": 4}
    regular_priority = {"qtd_linhas": 14}

    priority_queue.enqueue(high_priority)
    priority_queue.enqueue(regular_priority)
    assert len(priority_queue) == 2

    priority_queue.enqueue(high_priority)
    priority_queue.enqueue(regular_priority)
    assert priority_queue.dequeue() == high_priority

    priority_queue.enqueue(high_priority)
    priority_queue.enqueue(regular_priority)
    assert priority_queue.search(0) == high_priority

    with pytest.raises(IndexError):
        priority_queue.search(-1)
